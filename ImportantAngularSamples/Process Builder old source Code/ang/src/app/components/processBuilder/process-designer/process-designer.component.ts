import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProcessService } from '../../../services/process.service';
import { Process, ProcessSteps, ParentShape, ShapeTypes } from '../../models/process';
import { mxgraph } from "mxgraph";
import { MessageService } from 'primeng/api';
import { CommonService } from '../../../services/common.service';
import { FormGroup, Validators } from '@angular/forms';
declare var require: any;
const mx = require('mxgraph')({
	mxImageBasePath: 'assets/mxgraph/images',
	mxBasePath: 'assets/mxgraph'
});


@Component({
	selector: 'app-process-designer',
	templateUrl: './process-designer.component.html',
	styleUrls: ['./process-designer.component.css']
})
export class ProcessDesignerComponent implements OnInit {


	//For Prepare Publish
	showProcessSaveOrUpdate: any;
	dialogTitle: any;
	selectedStep: any;
	proc: any;

	@ViewChild('graphContainer') container: ElementRef;
	display: string;
	Properties: FormGroup;
	EdgeProperties: FormGroup;
	display2: string;

	constructor(public _router: Router, public route: ActivatedRoute, public cs: CommonService,
		public procService: ProcessService, public msgSer: MessageService) {
		this.route.params.subscribe((params: Params) => {
			this.cs.proc.Id = parseInt(params.id);
		})
	}

	ngOnInit(): void {
		debugger;
		this.procService.LoadProcessWithDetails(this.cs.proc.Id).subscribe(
			data => {
				debugger
				this.cs.proc = data;
				this.prepareGraph();
			},
			err => {
				console.log(err);
			}
		)

		this.createProcessForm();
	}


	prepareGraph() {
		document.oncontextmenu = () => {
			return false;
		}

		var generalsidebar = document.getElementById("generalsidebarContainer");

		//	var predefinedsidebar = document.getElementById("predefinedsidebarContainer");

		// Creates new toolbar without event processing  
		var toolbar = new mx.mxToolbar(generalsidebar);
		toolbar.enabled = false;

		// Workaround for Internet Explorer ignoring certain styles
		if (mx.mxClient.IS_QUIRKS) {
			document.body.style.overflow = 'hidden';
			new mx.mxDivResizer(generalsidebar);
			//	new mx.mxDivResizer(predefinedsidebar);
			new mx.mxDivResizer(this.container);
		}

		// Creates the model and the graph inside the container
		// using the fastest rendering available on the browser
		var model = new mx.mxGraphModel();
		this.cs.graph = new mx.mxGraph(this.container.nativeElement, model);


		// Returns a shorter label if the cell is collapsed and no
		// label for expanded groups
		// this.graph.getLabel = function (cell) {
		// 	var tmp = mx.mxGraph.prototype.getLabel.apply(this, arguments); // "supercall"

		// 	if (this.isCellLocked(cell)) {
		// 		// Returns an empty label but makes sure an HTML
		// 		// element is created for the label (for event
		// 		// processing wrt the parent label)
		// 		return "";
		// 	} else if (this.isCellCollapsed(cell)) {
		// 		var index = tmp.indexOf("</h1>");

		// 		if (index > 0) {
		// 			tmp = tmp.substring(0, index + 5);
		// 			console.log(tmp)
		// 		}
		// 	}

		// 	return tmp;
		// };

		// Disables HTML labels for swimlanes to avoid conflict
		// for the event processing on the child cells. HTML
		// labels consume events before underlying cells get the
		// chance to process those events.
		//
		// NOTE: Use of HTML labels is only recommended if the specific
		// features of such labels are required, such as special label
		// styles or interactive form fields. Otherwise non-HTML labels
		// should be used by not overidding the following function.
		// See also: configureStylesheet.
		this.cs.graph.isHtmlLabel = function (cell) {
			return !this.isSwimlane(cell);
		};

		//we enable dragable inside the mxGraph
		this.cs.graph.dropEnabled = true;
		// Enables the connection inside vertex
		this.cs.graph.setConnectable(true);
		this.cs.graph.setMultigraph(false);
		// this important command resolve the problem  when connect vertex to nothing it will not create that edge
		this.cs.graph.setAllowDanglingEdges(false);
		//graph.setTooltips(true);
		new mx.mxRubberband(this.cs.graph);


		var manager = new mx.mxSwimlaneManager(this.cs.graph);
		var layout = new mx.mxStackLayout(this.cs.graph, true);
		layout.resizeParent = true;

		var layoutMgr = new mx.mxLayoutManager(this.cs.graph);
		//when make drag the vertex this function is called
		layoutMgr.getLayout = function (cell) {
			//This means that all swimlanes inside mxStackLayout set vertically 
			layout.horizontal = false;

			if (!model.isEdge(cell) && this.graph.getModel().getChildCount(cell) > 0 && cell.style != ShapeTypes[ShapeTypes.swimlane] &&
				(model.getParent(cell) == model.getRoot() || this.graph.isPool(cell))) {
				layout.fill = this.graph.isPool(cell);
				return layout;
			}
			return null;
		};

		this.cs.graph.isPool = (cell) => {
			//the below command get all the mx Cells (inner swimlanes and all shapes)
			var model = this.cs.graph.getModel();
			//the below command get the parent swimlane that contain the inner swimlane which is Pool 1 or Pool 2
			var parent = model.getParent(cell);
			//the below command get the Parent Container for all the inner swimlanes which is parent
			var boss = model.getRoot();

			return parent != null && model.getParent(parent) == model.getRoot();
		};

		this.cs.parent = this.cs.graph.getDefaultParent();

		//this function is used to add images inside toolbar
		this.setStyle(this.cs.graph);

		if (this.cs.proc.ProcessSteps.length > 0) {
			this.loadData();
		}
		else {
			this.beginAddShape();
		}

		this.addSidebarIcon(this.cs.graph, generalsidebar, 'Swimlane', './assets/shapes/swimLane.png', 1000, 200, ShapeTypes[ShapeTypes.swimlane]);
		toolbar.addLine();
		this.addSidebarIcon(this.cs.graph, generalsidebar, 'Step', './assets/shapes/process.png', 100, 70, ShapeTypes[ShapeTypes.process]);
		toolbar.addLine();
		this.addSidebarIcon(this.cs.graph, generalsidebar, 'Start', './assets/shapes/start.png', 100, 100, ShapeTypes[ShapeTypes.start]);
		toolbar.addLine();
		this.addSidebarIcon(this.cs.graph, generalsidebar, 'Condition', './assets/shapes/decision.png', 100, 100, ShapeTypes[ShapeTypes.condition]);
		//this below command is add line in the toolbar
		toolbar.addLine();
		this.addSidebarIcon(this.cs.graph, generalsidebar, 'End', './assets/shapes/end.png', 100, 100, ShapeTypes[ShapeTypes.end]);

		/* this.addPredefinedSidebarIcon(
			this.cs.graph,
			predefinedsidebar,
			'<div><h3 style="margin:0px;">New Mail</h3><br>' +
			'<img src="./assets/shapes/mail_new.png" width="48" height="48">' +
			'<br><input type="checkbox"/>CC Archive</div>',
			"./assets/shapes/mail_new.png"
		);
		this.addPredefinedSidebarIcon(
			this.cs.graph,
			predefinedsidebar,
			'<h1 style="margin:0px;">Keys</h1><br>' +
			'<img src="./assets/shapes/keys.png" width="48" height="48">',
			"./assets/shapes/keys.png"
		); */


		//The below command is to prevent vertex to go outside from swimlane
		this.cs.graph.graphHandler.setRemoveCellsFromParent(false);
		//when make right click on the graph this event will fired
		this.cs.graph.popupMenuHandler.factoryMethod = (menu, cell, evt) => {
			this.createPopupMenu(this.cs.graph, menu, cell, evt);
		};
		//The below command will assign mouse Domw (left click , right click) , mouse hover (mouse over and mouse out)
		this.cs.graph.addMouseListener(
			{
				mouseDown: (sender, evt) => {
					this.cs.cell = evt.state.cell;
					if (this.cs.cell != null) {
						//to make check if the cell is edge
						if (this.cs.cell.source != null && this.cs.cell.target != null && this.cs.cell.edge) {

							this.cs.selectedEdge.ShapeID = parseInt(this.cs.cell.target.id);
							this.cs.selectedEdge.ParentShape_ID = parseInt(this.cs.cell.source.id);
							this.cs.selectedEdge.Process_ID = this.cs.proc.Id;
							if (this.cs.cell.value) {
								this.cs.selectedEdge.EdgeDesc = this.cs.cell.value;
							} else {
								this.cs.selectedEdge.EdgeDesc = '';
							}
							this.cs.graph.stopEditing(false);
						}
						else {
							this.cs.setSelectedCellValue(this.cs.cell);
							this.cs.graph.stopEditing(false);
							// this.execute(this.dblClickAction, cell);
							// evt.consume();
						}
					}
				},
				mouseMove: (sender, me) => {
					this.mouseMove(sender, me);
				},
				mouseUp: function (sender, me) { },
			}
		);
		//it will check if this location valid to drop vertex
		mx.mxDragSource.prototype.getDropTarget = (graph, x, y) => {
			var cell = graph.getCellAt(x, y);
			if (!graph.isValidDropTarget(cell)) {
				cell = null;
			}
			return cell;
		};
		//This means that we  allow assign edge to another vertex in swimlane
		this.cs.graph.setSplitEnabled(true);
		//This method will called when make connect between 2 vertex 
		this.cs.graph.connectionHandler.addListener(mx.mxEvent.CONNECT, (sender, evt) => {
			debugger;

			var edge = evt.getProperty('cell');
			var source = this.cs.graph.getModel().getTerminal(edge, true);
			var target = this.cs.graph.getModel().getTerminal(edge, false);
			debugger;

			if (target.parent.id != source.parent.id) {
				debugger;
				var style = this.cs.graph.getStylesheet().getDefaultEdgeStyle();

				style[mx.mxConstants.STYLE_DASHED] = true;

			} else {
				var style = this.cs.graph.getStylesheet().getDefaultEdgeStyle();

				style[mx.mxConstants.STYLE_DASHED] = false;
			}

			if (this.cs.proc.ProcessSteps.find(i => i.Step_ID == parseInt(source.id)) != null) {
				this.cs.selectedEdge.ShapeID = parseInt(target.id);
				this.cs.selectedEdge.ParentShape_ID = parseInt(source.id);
				this.cs.selectedEdge.Process_ID = this.cs.proc.Id;
				this.cs.selectedEdge.EdgeDesc = "";
				debugger;
				if (this.cs.proc.ProcessSteps.find(i => i.Step_ID == this.cs.selectedEdge.ShapeID) != null) {
					this.cs.proc.ProcessSteps.find(i => i.Step_ID == this.cs.selectedEdge.ShapeID).ParentObjects.push({ ...this.cs.selectedEdge });
					this.msgSer.add({ key: 'popupScreen', severity: 'success', summary: 'Success', detail: source.value + ' connect to ' + target.value + ' Successfully.' });
				}
			}
		});

		//(after swapping an edge, the parent will be changed for new target vertex  and will be removed from old target vertex).
		this.cs.graph.addListener(mx.mxEvent.CELL_CONNECTED, (sender, evt) => {
			//If the connection is occured on previous target vertex then this code executed
			if (evt.properties.previous != null) {

				var old_source_previous = evt.properties.previous.id;
				let edgeDesc_old_target = evt.properties.edge;

				this.cs.DeleteSwapedEdge(old_source_previous);

				if (sender.selectionModel.cells != null) {
					var new_target = evt.properties.terminal.id;
					var source = sender.selectionModel.cells[0].source.id;

					// let parent = new ParentShape();
					this.cs.selectedEdge.ShapeID = new_target
					this.cs.selectedEdge.ParentShape_ID = source
					this.cs.selectedEdge.Process_ID = this.cs.proc.Id;
					if (edgeDesc_old_target.value != null) {
						this.cs.selectedEdge.EdgeDesc = edgeDesc_old_target.value;
					}
					else {
						this.cs.selectedEdge.EdgeDesc = "";
					}

					this.cs.proc.ProcessSteps.find(i => i.Step_ID == this.cs.selectedEdge.ShapeID).ParentObjects.push({ ...this.cs.selectedEdge });
					this.msgSer.add({ key: 'popupScreen', severity: 'success', summary: 'Success', detail: this.cs.selectedEdge.ShapeID + ' Reconnect to ' + this.cs.selectedEdge.ParentShape_ID + ' Successfully.' });

				} else {
					this.msgSer.add({ key: 'popupScreen', severity: 'error', summary: 'Error', detail: 'Reconnect failed.' });
				}
			}
		});

		//This method will called when make resize cells
		this.cs.graph.addListener(mx.mxEvent.CELLS_RESIZED,
			mx.mxUtils.bind(this, (sender, evt) => {
				//The below check is very important to make sure that the vertex resized is the same in the selectedStep varaible
				if (this.cs.selectedStep != null && this.cs.selectedStep.Step_ID == evt.properties.cells[0].id) {

					this.cs.setSelectedCellValue(evt.properties.cells[0]);
					this.cs.graph.stopEditing(false);
				}
			})
		);

		//This method will called when make move cells
		this.cs.graph.addListener(mx.mxEvent.CELLS_MOVED,
			mx.mxUtils.bind(this, (sender, evt) => {
				//The below check is very important to make sure that the vertex resized is the same in the selectedStep varaible
				if (this.cs.selectedStep != null && this.cs.selectedStep.Step_ID == evt.properties.cells[0].id) {
					this.cs.setSelectedCellValue(evt.properties.cells[0]);
					this.cs.graph.stopEditing(false);
				}
			})

		);
	}

	loadData() {
		try {
			//we need to define local variable to attach the global variable to be accessable inside foreach loop
			let graph = this.cs.graph;
			let parent = this.cs.parent;
			graph.getModel().beginUpdate();

			var root = undefined;
			var dict = {};
			var swimLane;

			//we make 2 seperate for loop to make:
			//1-Insert vertexs inside the graph
			//2-Insert Edges that connect between the vertexs
			this.cs.proc.ProcessSteps.forEach(function (element) {
				var id = element.Step_ID;
				var name = element.Name;

				if (element.ShapeType == ShapeTypes.swimlane) {
					swimLane = graph.insertVertex(parent, id, name, element.x, element.y, element.Width, element.Height, ShapeTypes[ShapeTypes.swimlane].toString());
				}
				else {

					if (element.ShapeType == ShapeTypes.start) {
						var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.Width, element.Height, ShapeTypes[ShapeTypes.start].toString());
					}
					else if (element.ShapeType == ShapeTypes.end) {
						var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.Width, element.Height, ShapeTypes[ShapeTypes.end].toString());
					}
					else if (element.ShapeType == ShapeTypes.process) {
						var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.Width, element.Height, ShapeTypes[ShapeTypes.process].toString());
					}
					else if (element.ShapeType == ShapeTypes.condition) {
						var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.Width, element.Height, ShapeTypes[ShapeTypes.condition].toString());
					}
					else {
						var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.Width, element.Height, ShapeTypes[ShapeTypes.process].toString());
					}
					dict[id] = graphElement;
				}
			});

			var AllCells = this.cs.graph.getModel();

			//This Step will allow Insert Edges that connect between the vertexs
			this.cs.proc.ProcessSteps.forEach(function (element) {

				var graphElement = AllCells.getCell(element.Step_ID.toString());


		

				if (element.ParentObjects != null) {
					if (element.ParentObjects.length > 0) {
						// run through each parent element
						element.ParentObjects.forEach(function (parentObj) {
							var parentGraphElement = dict[parentObj.ParentShape_ID];
							// add line between current element and parent
							if (parentObj.EdgeDesc != null) {
								graph.insertEdge(swimLane, null, parentObj.EdgeDesc, parentGraphElement, graphElement);
							}
							else {
								graph.insertEdge(swimLane, null, '', parentGraphElement, graphElement);
							}

						});
					} else {
						// set root for layouting
						root = graphElement;
					}
				}

			});
		}
		finally {
			this.cs.graph.getModel().endUpdate();
			//   new mx.mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
		}
	}

	addSidebarIcon(graph, sidebar, label, image, width, height, style) {
		let funct = (graph, evt, cell) => {

			var model = graph.getModel();
			graph.stopEditing(true);
			var pt = graph.getPointForEvent(evt);
			var graphElement = null;

			var YAxisSwimlane = 0;
			if (this.cs.proc.ProcessSteps.length > 0) {
				YAxisSwimlane = (this.cs.proc.ProcessSteps.filter(i => i.ShapeType == ShapeTypes.swimlane).length) * 200;
			}

			model.beginUpdate();
			debugger;
			try {
				if (style != ShapeTypes[ShapeTypes.swimlane]) {
					//we make check if the vertex dragged inisde swimlane only else show error message
					if (cell != null) {
						debugger;
						//we will check if the dragged element is start element > 1 ==> we will show error message
						if (style == ShapeTypes[ShapeTypes.start]) {
							var count = this.cs.proc.ProcessSteps.filter(i => i.ShapeType == ShapeTypes.start && i.SwimlaneID == cell.id).length;
						}
						if (count >= 1) {
							this.msgSer.add({ key: 'popupScreen', severity: 'error', summary: 'Error', detail: 'Cannot add more start step inside the same swimlane' });
							return null;
						}
						//we make insert vertex inside the specified swimlane
						this.cs.selectedStep = this.createInstance(label, style, width, height, cell);
						this.cs.selectedStep.x = (pt.x - cell.geometry.x);
						this.cs.selectedStep.y = (pt.y - cell.geometry.y);

						graphElement = graph.insertVertex(cell, null, this.cs.selectedStep.Name, this.cs.selectedStep.x, this.cs.selectedStep.y, this.cs.selectedStep.Width, this.cs.selectedStep.Height, style);

						this.cs.selectedStep.Step_ID = parseInt(graphElement.id);
						this.cs.selectedStep.SwimlaneID = parseInt(cell.id);
						graph.setSelectionCells(graphElement);
						this.cs.selectedStep.Width = width;
						this.cs.selectedStep.Height = height;
						this.msgSer.add({ key: 'popupScreen', severity: 'success', summary: 'Success', detail: ShapeTypes[this.cs.selectedStep.ShapeType] + ' Added Successfully.' });

					}
					else {
						this.msgSer.add({ key: 'popupScreen', severity: 'error', summary: 'Error', detail: 'Cannot add vertex outside swimlane' });
						return null;
					}
				}
				else {
					//it will create swimlane 
					this.cs.selectedStep = this.createInstance(label, style, width, height, cell);

					this.cs.selectedStep.x = 0;
					this.cs.selectedStep.y = YAxisSwimlane;
					graphElement = graph.insertVertex(this.cs.parent, null, this.cs.selectedStep.Name, this.cs.selectedStep.x, this.cs.selectedStep.y, this.cs.selectedStep.Width, this.cs.selectedStep.Height, style);

					this.cs.selectedStep.Step_ID = parseInt(graphElement.id);
					this.cs.selectedStep.SwimlaneID = null;
					this.msgSer.add({ key: 'popupScreen', severity: 'success', summary: 'Success', detail: this.cs.selectedStep.ShapeType + ' Added Successfully.' });
				}
			} finally {
				model.endUpdate();
			}
			graph.setSelectionCell(graphElement);
			//push copy to array (spread object)
			this.cs.pushToArray({ ...this.cs.selectedStep });

		};

		// Creates the image which is used as the sidebar icon (drag source)
		var img = document.createElement("img");
		img.setAttribute("src", image);
		img.style.width = "100%";
		img.style.height = "15%";
		img.title = "Drag this to the diagram to create a new vertex";
		sidebar.appendChild(img);

		this.cs.dragElt = document.createElement("div");
		this.cs.dragElt.style.border = "dashed black 1px";
		this.cs.dragElt.style.width = "10px";
		this.cs.dragElt.style.height = "10px";

		// Creates the image which is used as the drag icon (preview)
		var ds = mx.mxUtils.makeDraggable(
			img,
			graph,
			funct,
			this.cs.dragElt,
			0,
			0,
			true,
			true
		);
		this.cs.dragElt = null;
		ds.setGuidesEnabled(true);
	}


	createInstance(label, style, width, height, cell): ProcessSteps {
		debugger;
		let selectedStep = new ProcessSteps();

		if (this.cs.getShapeTypeValue(style) != 1) {

			var uniqueID = this.cs.proc.ProcessSteps.filter(i => i.ShapeType == this.cs.getShapeTypeValue(style) && i.SwimlaneID == cell.id).length + 1;
			var x = this.cs.proc.ProcessSteps.filter(i => i.ShapeType == this.cs.getShapeTypeValue(style) && i.SwimlaneID == cell.id);
			selectedStep.Name = label + uniqueID;
			selectedStep.ShapeType = this.cs.getShapeTypeValue(style);
			selectedStep.Width = width;
			selectedStep.Height = height;
			selectedStep.Process_ID = this.cs.proc.Id;
			return selectedStep;

		} else {

			var uniqueID = this.cs.proc.ProcessSteps.filter(i => i.ShapeType == this.cs.getShapeTypeValue(style)).length + 1;

			selectedStep.Name = label + uniqueID;
			selectedStep.ShapeType = this.cs.getShapeTypeValue(style);
			selectedStep.Width = width;
			selectedStep.Height = height;
			selectedStep.Process_ID = this.cs.proc.Id;
			return selectedStep;

		}
	}

	/* addPredefinedSidebarIcon(graph, sidebar, label, image) {
		// Function that is executed when the image is dropped on
		// the graph. The cell argument points to the cell under
		// the mousepointer if there is one.
		var funct = function (graph, evt, cell, x, y) {
			var parent = graph.getDefaultParent();
			var model = graph.getModel();

			var v1 = null;

			model.beginUpdate();
			try {
				// NOTE: For non-HTML labels the image must be displayed via the style
				// rather than the label markup, so use 'image=' + image for the style.
				// as follows: v1 = graph.insertVertex(parent, null, label,
				// pt.x, pt.y, 120, 120, 'image=' + image);
				v1 = graph.insertVertex(parent, null, label, x, y, 120, 120);
				v1.setConnectable(false);

				// Presets the collapsed size
				v1.geometry.alternateBounds = new mx.mxRectangle(0, 0, 120, 40);

				// Adds the ports at various relative locations

			} finally {
				model.endUpdate();
			}

			graph.setSelectionCell(v1);
		};

		// Creates the image which is used as the sidebar icon (drag source)
		var img = document.createElement("img");
		img.setAttribute("src", image);
		img.style.width = "48px";
		img.style.height = "48px";
		img.title = "Drag this to the diagram to create a new vertex";
		sidebar.appendChild(img);

		var dragElt = document.createElement("div");
		dragElt.style.border = "dashed black 1px";
		dragElt.style.width = "120px";
		dragElt.style.height = "120px";

		// Creates the image which is used as the drag icon (preview)
		var ds = mx.mxUtils.makeDraggable(
			img,
			graph,
			funct,
			dragElt,
			0,
			0,
			true,
			true
		);
		ds.setGuidesEnabled(true);
	} */

	beginAddShape() {
		debugger;

		debugger;
		var initial = this.cs.graph.insertVertex(this.cs.parent, null, 'swimlane1', 0, 0, 1000, 200, ShapeTypes[ShapeTypes.swimlane]);

		this.cs.selectedStep.Step_ID = initial.id;
		this.cs.selectedStep.Name = 'swimlane1';
		this.cs.selectedStep.ShapeType = ShapeTypes.swimlane;
		this.cs.selectedStep.x = 100;
		this.cs.selectedStep.y = 100;
		this.cs.selectedStep.Width = 1000;
		this.cs.selectedStep.Height = 200;
		this.cs.selectedStep.SwimlaneID = null;
		this.cs.selectedStep.Process_ID = this.cs.proc.Id;
		this.cs.selectedStep.Prop1 = '';
		this.cs.selectedStep.Prop2 = '';
		//The below command will focus on the specific mxCell (vertex)
		this.cs.graph.selectVertices(initial);

		this.cs.pushToArray({ ...this.cs.selectedStep });

	}

	setStyle(graph) {
		var style = graph.getStylesheet().getDefaultVertexStyle();

		//we set style for the SHAPE_SWIMLANE on the class name called swimlane
		style = mx.mxUtils.clone(style);
		style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_SWIMLANE;
		style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
		style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'rgb(195, 217, 255)';
		style[mx.mxConstants.STYLE_FONTSIZE] = 14;
		style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
		style[mx.mxConstants.STYLE_STARTSIZE] = 22;
		style[mx.mxConstants.STYLE_HORIZONTAL] = false;
		style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
		style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
		style[mx.mxConstants.STYLE_RESIZEABLE] = 1;
		graph.getStylesheet().putCellStyle(ShapeTypes[ShapeTypes.swimlane], style);

		// //we set style for the SHAPE_RECT on the class name called process
		style = mx.mxUtils.clone(style);
		style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RECTANGLE;
		style[mx.mxConstants.STYLE_FONTSIZE] = 14;
		style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
		style[mx.mxConstants.STYLE_ROUNDED] = true;
		style[mx.mxConstants.STYLE_HORIZONTAL] = true;
		style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
		delete style[mx.mxConstants.STYLE_STARTSIZE];
		style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'none';
		graph.getStylesheet().putCellStyle(ShapeTypes[ShapeTypes.process], style);


		// //we set style for the SHAPE_Ellipse on the class name called state
		style = mx.mxUtils.clone(style);
		style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_ELLIPSE;
		style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.EllipsePerimeter;
		delete style[mx.mxConstants.STYLE_ROUNDED];
		style[mx.mxConstants.STYLE_FONTSIZE] = 14;
		style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
		graph.getStylesheet().putCellStyle(ShapeTypes[ShapeTypes.start], style);

		//we set style for the SHAPE_RHOMBUS on the class name called condition
		style = mx.mxUtils.clone(style);
		style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RHOMBUS;
		style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.RhombusPerimeter;
		style[mx.mxConstants.STYLE_FONTSIZE] = 14;
		style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
		graph.getStylesheet().putCellStyle(ShapeTypes[ShapeTypes.condition], style);

		//we set style for the SHAPE_DOUBLE_ELLIPSE on the class name called end
		style = mx.mxUtils.clone(style);
		style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_DOUBLE_ELLIPSE;
		style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.EllipsePerimeter;
		style[mx.mxConstants.STYLE_FONTSIZE] = 14;
		style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
		delete style[mx.mxConstants.STYLE_SPACING_RIGHT];
		graph.getStylesheet().putCellStyle(ShapeTypes[ShapeTypes.end], style);

		//we set style of normal arrow line
		style = graph.getStylesheet().getDefaultEdgeStyle();
		style[mx.mxConstants.STYLE_EDGE] = mx.mxEdgeStyle.ElbowConnector;
		style[mx.mxConstants.STYLE_ENDARROW] = mx.mxConstants.ARROW_BLOCK;		
		style[mx.mxConstants.STYLE_ROUNDED] = true;
		style[mx.mxConstants.STYLE_FONTSIZE] = 14;
		style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
		style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
		style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
		style[mx.mxConstants.STYLE_SPACING_TOP] = 28;
		graph.getStylesheet().putCellStyle(ShapeTypes[ShapeTypes.arrow], style);

		//we set style of Arrow Open on the class called crossover   like ---------
		style = mx.mxUtils.clone(style);
		style[mx.mxConstants.STYLE_DASHED] = true;
		style[mx.mxConstants.STYLE_ENDARROW] = mx.mxConstants.ARROW_OPEN;
		style[mx.mxConstants.STYLE_STARTARROW] = mx.mxConstants.ARROW_OVAL;
		style[mx.mxConstants.STYLE_FONTSIZE] = 14;
		style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
		graph.getStylesheet().putCellStyle(ShapeTypes[ShapeTypes.crossover], style);

		// Installs double click on middle control point and
		// changes style of edges between empty and this value
		graph.alternateEdgeStyle = 'elbow=vertical';
	}
	//this function used to create the entries in the popupmenu
	createPopupMenu(graph, menu, cell, evt) {

		if (cell != null) {

			if (cell.edge == true) {
				this.fillEdgeOptions(graph, menu);
			}
			else if (cell.vertex == true) {
				if (cell.style == ShapeTypes[ShapeTypes.process]) {
					this.fillBasicOptions(graph, menu);
					this.fillRectOptions(menu);
				}
				else if (cell.style == ShapeTypes[ShapeTypes.condition]) {
					this.fillBasicOptions(graph, menu);
					this.fillConditionOptions(menu);
				}
				else {
					this.fillBasicOptions(graph, menu);
				}
			}
		}
	};

	fillEdgeOptions(graph, menu) {
		menu.addItem('Edit', null, () => {
			if (graph.isEnabled()) {
				debugger;
				this.display2 = 'block';
				this.EdgeProperties.patchValue({
					EdgeDesc: this.cs.selectedEdge.EdgeDesc
				});
				//this.showEdgeProperties(this.cs.graph, this.cs.selectedEdge);
			}
		})

		menu.addItem('Delete', null, () => {
			if (graph.isEnabled()) {
				this.deleteCells();
			}
		})
	}

	fillBasicOptions(graph, menu) {
		menu.addItem('Delete', null, () => {
			if (graph.isEnabled()) {
				this.deleteCells();
			}
		})
	}

	//this functionis used to begin fill option only for rectangle shapes
	fillRectOptions(menu) {
		menu.addItem('Set Properties', null, () => {
			debugger;
			this.display = 'block';
			this.Properties.patchValue({
				Name: this.cs.selectedStep.Name,
				Desc: this.cs.selectedStep.Prop1,
				Desc2: this.cs.selectedStep.Prop2
			});

			//this.showProperties(this.graph, this.selectedStep);
		});
	}

	//this functionis used to begin fill option only for rectangle shapes
	fillConditionOptions(menu) {
		menu.addItem('Set Properties', null, () => {
			//	this.showProperties(this.cs.graph, this.cs.selectedStep);
			this.display = 'block';
			this.Properties.patchValue({
				Name: this.cs.selectedStep.Name,
				Desc: this.cs.selectedStep.Prop1,
				Desc2: this.cs.selectedStep.Prop2
			});

		});
	}

	//This Method repsonsible for delete vertex and edge
	deleteCells() {
		this.cs.graph.escape();
		if (this.cs.graph.isEnabled()) {
			this.cs.graph.removeCells();

			if (this.cs.cell.vertex == true) {
				//we remove everything inside the swimlane
				if (this.cs.selectedStep.ShapeType == ShapeTypes.swimlane) {
					this.cs.proc.ProcessSteps = this.cs.proc.ProcessSteps
						.filter(i =>
							i.Step_ID != this.cs.selectedStep.Step_ID
						);

					this.cs.proc.ProcessSteps = this.cs.proc.ProcessSteps
						.filter(i =>
							i.SwimlaneID != this.cs.selectedStep.Step_ID
						);
				}
				else {
					//If the Delete item is process , condition , except swimlane we  remove it plush the parent shape connection
					this.cs.proc.ProcessSteps = this.cs.proc.ProcessSteps.filter(i => i.Step_ID != this.cs.selectedStep.Step_ID);
					let temp = this.cs.proc;
					temp.ProcessSteps.forEach(item => {
						let shapeID = item.Step_ID;
						if (item.ParentObjects.length > 0) {
							item.ParentObjects.forEach(parent => {
								if (parent.ParentShape_ID == this.cs.selectedStep.Step_ID) {
									let parentID = parent.ParentShape_ID;
									this.cs.proc.ProcessSteps.find(x => x.Step_ID == shapeID).ParentObjects = this.cs.proc.ProcessSteps.find(x => x.Step_ID == shapeID).ParentObjects.filter(i => i.ParentShape_ID != parentID);
								}
							})
						}

					});
					this.msgSer.add({ key: 'popupScreen', severity: 'success', summary: 'Success', detail: this.cs.selectedStep.Name + ' Deleted Successfully.' });
				}
				this.cs.selectedStep = new ProcessSteps();
			}
			else if (this.cs.cell.edge == true) {
				this.cs.DeleteEdge(this.cs.selectedEdge);
			}
		}
	};
	//This method is used to detect the state of the hover operation (drag Enter , drage Leave) 
	//based on the current state which refelect on the selected Step variable
	mouseMove(sender, me) {
		if (sender != null && me != null) {
			if (this.cs.currentState != null && me.getState() == this.cs.currentState) {
				return;
			}
			if (me.state != null) {
				var tmp = me.state.cell;
			}
			if (tmp != this.cs.currentState) {
				if (this.cs.currentState != null) {
					this.dragLeave(me.getEvent(), this.cs.currentState);
				}
				this.cs.currentState = tmp;

				if (this.cs.currentState != null) {
					this.dragEnter(me.getEvent(), this.cs.currentState);
				}
			}
		}
	}

	dragEnter(evt, state) {
		this.cs.cell = state;
		if (this.cs.cell != null && this.cs.graph.isEnabled()) {
			this.cs.setSelectedCellValue(this.cs.cell);
			this.cs.graph.stopEditing(false);
		}
	}

	dragLeave(evt, state) {
		this.cs.cell = state;
		if (this.cs.cell != null && this.cs.graph.isEnabled()) {
			this.cs.graph.stopEditing(false);
		}

		if (state != null) {
			this.cs.graph.stopEditing(false);
		}
	}

	// showEdgeProperties(graph, edge: ParentShape) {

	// 	var form = new mx.mxForm('properties');
	// 	var edgeDescField = form.addText('Edge Desc', edge.EdgeDesc);
	// 	var wnd = null;

	// 	var okFunction = () => {
	// 		edge.EdgeDesc = edgeDescField.value;
	// 		graph.model.setValue(this.cs.cell, edge.EdgeDesc);
	// 		this.cs.updateEdge(this.cs.selectedEdge);
	// 		wnd.destroy();
	// 	}

	// 	var cancelFunction = () => { wnd.destroy(); }

	// 	form.addButtons(okFunction, cancelFunction);
	// 	//var parent = graph.model.getParent();
	// 	var title = 'Edge Properities';
	// 	wnd = this.showModalWindow(title, form.table, 200, 150);
	// }

	// showProperties(graph, cell: ProcessSteps) {
	// 	var form = new mx.mxForm('properties');
	// 	var nameField = form.addText('Name', cell.Name);
	// 	var prop1 = form.addText('Prop1', cell.Prop1 || '');
	// 	var prop2 = form.addText('Prop2', cell.Prop2 || '');
	// 	var wnd = null;
	// 	var okFunction = () => {
	// 		cell.Name = nameField.value;
	// 		cell.Prop1 = prop1.value;
	// 		cell.Prop2 = prop2.value;
	// 		this.cs.pushToArray(cell);
	// 		graph.model.setValue(this.cs.cell, cell.Name);
	// 		wnd.destroy();
	// 	}
	// 	var cancelFunction = () => {
	// 		wnd.destroy();
	// 	}
	// 	form.addButtons(okFunction, cancelFunction);
	// 	var title = 'Properties for ' + cell.Name;
	// 	wnd = this.showModalWindow(title, form.table, 200, 150);
	// }

	// showModalWindow(title, content, width, height) {
	// 	var background = document.createElement('div');
	// 	background.style.position = 'absolute';
	// 	background.style.left = '0px';
	// 	background.style.top = '0px';
	// 	background.style.right = '0px';
	// 	background.style.bottom = '0px';
	// 	background.style.background = 'black';
	// 	mx.mxUtils.setOpacity(background, 50);
	// 	document.body.appendChild(background);
	// 	if (mx.mxClient.IS_QUIRKS) {
	// 		new mx.mxDivResizer(background);
	// 	}
	// 	var x = Math.max(0, document.body.scrollWidth / 2 - width / 2);
	// 	var y = Math.max(10, (document.body.scrollHeight || document.documentElement.scrollHeight) / 2 - height * 2 / 3);
	// 	var wnd = new mx.mxWindow(title, content, x, y, width, height, false, true);
	// 	wnd.setClosable(true);
	// 	// Fades the background out after after the window has been closed
	// 	wnd.addListener(mx.mxEvent.DESTROY, function (evt) {
	// 		mx.mxEffects.fadeOut(background, 50, true, 10, 30, true);
	// 	});
	// 	wnd.setVisible(true);
	// 	return wnd;
	// };

	SaveUpdateProcessDetails() {
		this.procService.putProcessWidthDetails(this.cs.proc).subscribe(
			data => {
				this._router.navigate(["processDefinition"]);
			});
	}

	BackToList() {
		this._router.navigate(["processDefinition"]);
	}

	createProcessForm() {
		this.Properties = this.cs.fb.group({
			Name: ['', [Validators.required]],
			Desc: ['', [Validators.required]],
			Desc2: ['', [Validators.required]]

		});

		this.EdgeProperties = this.cs.fb.group({

			EdgeDesc: ['', [Validators.required]]

		});
	}

	closeModalDialog() {
		this.display = 'none'; //set none css after close dialog
		this.display2 = 'none';
		this.resetForm();
	}

	resetForm() {
		this.cs.resetForm(this.Properties);
		this.cs.resetForm(this.EdgeProperties);
		this.createProcessForm();
	}

	onSubmit() {
		this.mapProcessModel(this.cs.graph);
		this.closeModalDialog();
	}
	mapProcessModel(graph) {
		debugger;
		this.cs.selectedStep.Name = this.Properties.value.Name;
		this.cs.selectedStep.Prop1 = this.Properties.value.Desc;
		this.cs.selectedStep.Prop2 = this.Properties.value.Desc2;
		//push copy to array (spread object)
		this.cs.pushToArray({ ...this.cs.selectedStep });
		graph.model.setValue(this.cs.cell, this.cs.selectedStep.Name);
	}
	SaveEdge(graph) {
		this.mapEdgeModel(this.cs.graph);
		this.closeModalDialog();
	}

	mapEdgeModel(graph) {
		this.cs.selectedEdge.EdgeDesc = this.EdgeProperties.value.EdgeDesc;
		graph.model.setValue(this.cs.cell, this.cs.selectedEdge.EdgeDesc);
		this.cs.updateEdge({ ...this.cs.selectedEdge });
	}
}
