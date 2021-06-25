import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

import { mxgraph } from "mxgraph";
import { Process, ProcessSteps, ParentShape } from '../models/process';
import { MessageService } from 'primeng/api';
declare var require: any;
const mx = require('mxgraph')({
	mxImageBasePath: 'assets/mxgraph/images',
	mxBasePath: 'assets/mxgraph'
});

declare var jquery:any;
declare var $:any;


@Component({
	selector: 'app-shape05',
	templateUrl: './shape05.component.html',
	styleUrls: ['./shape05.component.css'],
	encapsulation: ViewEncapsulation.None
})

export class Shape05Component implements OnInit  {
	
	// selectedValue: string;
	// proc: Process = new Process();
	// selectedStep: ProcessSteps = new ProcessSteps();
	// text: string = "";
	// graph: any;
	// count: number = 1;
	// parent: any;
	// cell:any;
	// selectedEdge:ParentShape= new ParentShape();
	// currentState:any;
	// dragElt:any;

	// @ViewChild('graphContainer') container: ElementRef;

	// constructor(private msgSer: MessageService){}

	 ngOnInit(): void {

	// 	document.oncontextmenu = () => {
	// 		return false;
	 	}

	// 	this.proc.Id = 1;
	// 	this.proc.Name = "process 1";

	// 	var generalsidebar = document.getElementById("generalsidebarContainer");

	// 	var predefinedsidebar = document.getElementById("predefinedsidebarContainer");
		
	// 	// Creates new toolbar without event processing  
	// 	var toolbar = new mx.mxToolbar(generalsidebar);
	// 	toolbar.enabled = false;

	// 	// Workaround for Internet Explorer ignoring certain styles
	// 	if (mx.mxClient.IS_QUIRKS) {
	// 		document.body.style.overflow = 'hidden';
	// 		new mx.mxDivResizer(generalsidebar);
	// 		new mx.mxDivResizer(predefinedsidebar);
	// 		new mx.mxDivResizer(this.container);
	// 	}

	// 	// Creates the model and the graph inside the container
	// 	// using the fastest rendering available on the browser
	// 	var model = new mx.mxGraphModel();
	// 	this.graph = new mx.mxGraph(this.container.nativeElement, model);


	// 	// Returns a shorter label if the cell is collapsed and no
	// 	// label for expanded groups
	// 	// this.graph.getLabel = function (cell) {
	// 	// 	var tmp = mx.mxGraph.prototype.getLabel.apply(this, arguments); // "supercall"

	// 	// 	if (this.isCellLocked(cell)) {
	// 	// 		// Returns an empty label but makes sure an HTML
	// 	// 		// element is created for the label (for event
	// 	// 		// processing wrt the parent label)
	// 	// 		return "";
	// 	// 	} else if (this.isCellCollapsed(cell)) {
	// 	// 		var index = tmp.indexOf("</h1>");

	// 	// 		if (index > 0) {
	// 	// 			tmp = tmp.substring(0, index + 5);
	// 	// 			console.log(tmp)
	// 	// 		}
	// 	// 	}

	// 	// 	return tmp;
	// 	// };

	// 	// Disables HTML labels for swimlanes to avoid conflict
	// 	// for the event processing on the child cells. HTML
	// 	// labels consume events before underlying cells get the
	// 	// chance to process those events.
	// 	//
	// 	// NOTE: Use of HTML labels is only recommended if the specific
	// 	// features of such labels are required, such as special label
	// 	// styles or interactive form fields. Otherwise non-HTML labels
	// 	// should be used by not overidding the following function.
	// 	// See also: configureStylesheet.
	// 	this.graph.isHtmlLabel = function (cell) {
	// 		return !this.isSwimlane(cell);
	// 	};

	// 	//we enable dragable inside the mxGraph
	// 	this.graph.dropEnabled = true;
	// 	// Enables the connection inside vertex
	// 	this.graph.setConnectable(true);
	// 	this.graph.setMultigraph(false);
	// 	// this important command resolve the problem  when connect vertex to nothing it will not create that edge
	// 	this.graph.setAllowDanglingEdges(false);
	// 	//graph.setTooltips(true);
	// 	new mx.mxRubberband(this.graph);
	// 	this.graph.setSplitEnabled(true); 
	// 	//This means that we dont allow assign edge to another vertex in swimlane
		
	// 	var manager = new mx.mxSwimlaneManager(this.graph);

	// 	var layout = new mx.mxStackLayout(this.graph, true);

	// 	layout.resizeParent = false;

	// 	var layoutMgr = new mx.mxLayoutManager(this.graph);

	// 	//when make drag the vertex this function is called
	// 	layoutMgr.getLayout = function (cell) {
	// 		//This means that all swimlanes inside mxStackLayout set vertically 
	// 		layout.horizontal = false;

	// 		if (!model.isEdge(cell) && this.graph.getModel().getChildCount(cell) > 0 && cell.style != 'swimlane' &&
	// 			(model.getParent(cell) == model.getRoot() || this.graph.isPool(cell))) {
	// 			layout.fill = this.graph.isPool(cell);

	// 			return layout;
	// 		}
	// 		return null;
	// 	};

	// 	this.graph.isPool = (cell) =>
	// 	{
	// 	  //the below command get all the mx Cells (inner swimlanes and all shapes)
	// 	  var model = this.graph.getModel();
	// 	  //the below command get the parent swimlane that contain the inner swimlane which is Pool 1 or Pool 2
	// 	  var parent = model.getParent(cell);
	// 	  //the below command get the Parent Container for all the inner swimlanes which is parent
	// 	  var boss = model.getRoot();
  
	// 	  return parent != null && model.getParent(parent) == model.getRoot();
	// 	};
  
	// 	parent = this.graph.getDefaultParent();

	// 	//this function is used to add images inside toolbar
	// 	this.setStyle(this.graph);
	// 	this.beginAddShape();

	// 	this.addSidebarIcon(this.graph, generalsidebar, 'Swimlane', '../../../assets/shapes/swimLane.png', 1000, 200, 'swimlane');
    //     //this below command is add line in the toolbar
    //     toolbar.addLine();
    //     this.addSidebarIcon(this.graph, generalsidebar, 'Step', '../../../assets/shapes/process.png', 100, 70, 'process');
    //     toolbar.addLine();
    //     this.addSidebarIcon(this.graph, generalsidebar, 'Start', '../../../assets/shapes/start.png', 100, 100, 'start');
    //     toolbar.addLine();
    //     this.addSidebarIcon(this.graph, generalsidebar, 'Condition', '../../../assets/shapes/decision.png', 100, 100, 'condition');
    //     toolbar.addLine();
    //     this.addSidebarIcon(this.graph, generalsidebar, 'End', '../../../assets/shapes/end.png', 100, 100, 'end');


	// 	//this below command is add line in the toolbar

	// 	this.addPredefinedSidebarIcon(
	// 		this.graph,
	// 		predefinedsidebar,
	// 		'<div><h3 style="margin:0px;">New Mail</h3><br>' +
	// 		  '<img src="../../../assets/shapes/mail_new.png" width="48" height="48">' +
	// 		  '<br><input type="checkbox"/>CC Archive</div>',
	// 		"../../../assets/shapes/mail_new.png"
	// 	  );

	// 	this.addPredefinedSidebarIcon(
	// 		this.graph,
	// 		predefinedsidebar,
	// 		'<h1 style="margin:0px;">Keys</h1><br>' +
	// 		'<img src="../../../assets/shapes/keys.png" width="48" height="48">' ,
	// 		"../../../assets/shapes/keys.png"
	// 	);


	// 	this.graph.graphHandler.setRemoveCellsFromParent(false);

	// 	this.graph.popupMenuHandler.factoryMethod =  (menu, cell, evt) => {
	// 		 this.createPopupMenu(this.graph, menu, cell, evt);
	// 	};

	// 	this.graph.addMouseListener(
	// 		{
	// 			mouseDown: (sender, evt) => {
	// 				this.cell = evt.state.cell;
	// 				if (this.cell != null) {
	// 					//to make check if the cell is edge
	// 					if (this.cell.source != null && this.cell.target != null && this.cell.edge) {

	// 						this.selectedEdge.ShapeID = parseInt(this.cell.target.id);
	// 						this.selectedEdge.ProcessSteps_ID = parseInt(this.cell.source.id);
	// 						this.selectedEdge.Process_ID = this.proc.Id;
    //                         this.selectedEdge.EdgeDesc = this.cell.value;
	// 						this.graph.stopEditing(false);
	// 					}
	// 					else {
	// 						this.setSelectedCellValue(this.cell);
	// 						this.graph.stopEditing(false);
	// 						// this.execute(this.dblClickAction, cell);
	// 						// evt.consume();
	// 					}
	// 				}


	// 				// if (this.currentState != null)
	// 				// {
	// 				// 	this.dragLeave(me.getEvent(), this.currentState);
	// 				// 	this.currentState = null;
	// 				// }
	// 			},
	// 			mouseMove: (sender, me) => {
	// 				this.mouseMove(sender, me);
	// 			},
	// 			mouseUp: function (sender, me) { },
	// 		}
	// 	);

	// 	mx.mxDragSource.prototype.getDropTarget = (graph, x, y) => {
	// 		var cell = graph.getCellAt(x, y);

	// 		if (!graph.isValidDropTarget(cell)) {
	// 			cell = null;
	// 		}
	// 		console.log('Value Is : ' + cell);
	// 		return cell;
	// 	};

	// 	this.graph.connectionHandler.addListener(mx.mxEvent.CONNECT,(sender, evt) => {
	// 		debugger;
	// 		var edge = evt.getProperty('cell');
	// 		var source = this.graph.getModel().getTerminal(edge, true);
	// 		var target = this.graph.getModel().getTerminal(edge, false);

	// 		if (this.proc.ProcessSteps.find(i => i.Step_ID == parseInt(source.id)) != null) {
			
	// 			const parent = new ParentShape();
	// 			parent.ShapeID = parseInt(target.id);
	// 			parent.ProcessSteps_ID = parseInt(source.id);
	// 			parent.Process_ID = this.proc.Id;
	// 			parent.EdgeDesc = "";
				
	// 			this.proc.ProcessSteps.find(i => i.Step_ID == parent.ShapeID).ParentObjects.push(parent);


	// 			this.msgSer.add({key: 'popupScreen', severity:'success', summary: 'Success', detail: source.value+' connect to '+target.value+' Successfully.'});
	// 			this.count++;
	// 		}
	// 	});

    //     this.graph.addListener(mx.mxEvent.CELLS_RESIZED,
    //         mx.mxUtils.bind(this,(sender, evt) => {
    //             if (this.selectedStep != null && this.selectedStep.Id == evt.properties.cells[0].id) {
				   
					
	// 				let selected = new ProcessSteps();
	// 				selected = this.selectedStep;
	// 	 			selected.Width = evt.properties.cells[0].geometry.width;
	// 				 selected.Height = evt.properties.cells[0].geometry.height;

					 
	// 	 			this.pushToArray(this.proc, selected);

	// 				 selected = null;
					
	// 	 			//graph.startEditingAtCell();
	// 				this.graph.stopEditing(false);
	// 	 			console.log(this.proc);
    //             }
    //         })
    //     );

    //     this.graph.addListener(mx.mxEvent.CELLS_MOVED,
    //         mx.mxUtils.bind(this,(sender, evt) => {
	// 			debugger;
    //             if (this.selectedStep != null && this.selectedStep.Id == evt.properties.cells[0].id ) {

	// 				this.setSelectedCellValue(evt.properties.cells[0]);

	// 				let selected = new ProcessSteps();
	// 				selected = this.selectedStep;
	// 				selected.x = evt.properties.cells[0].geometry.x;
	// 				selected.y = evt.properties.cells[0].geometry.y;
	// 				this.pushToArray(this.proc, selected);

	// 				selected = null;
    //             }

    //         })
    //     );

	// 	//-------------------------Make custom shapes----------------------------------------/
	// 	// var button = mx.mxUtils.button('Create toolbar entry from selection', (evt) => {
	// 	// 	if (!this.graph.isSelectionEmpty()) {
	// 	// 		// Creates a copy of the selection array to preserve its state
	// 	// 		var cells = this.graph.getSelectionCells();
	// 	// 		var bounds = this.graph.getView().getBounds(cells);

	// 	// 		// Function that is executed when the image is dropped on
	// 	// 		// the graph. The cell argument points to the cell under
	// 	// 		// the mousepointer if there is one.
	// 	// 		var funct = (graph, evt, cell) => {
	// 	// 			graph.stopEditing(false);

	// 	// 			var pt = graph.getPointForEvent(evt);
	// 	// 			var dx = pt.x - bounds.x;
	// 	// 			var dy = pt.y - bounds.y;

	// 	// 			graph.setSelectionCells(graph.importCells(cells, dx, dy, cell));
	// 	// 		}

	// 	// 		// Creates the image which is used as the drag icon (preview)
	// 	// 		var img = toolbar.addMode(null, 'editors/images/outline.gif', funct);
	// 	// 		mx.mxUtils.makeDraggable(img, this.graph, funct);
	// 	// 	}
	// 	// });

	// 	// button.style.position = 'absolute';
	// 	// button.style.left = '2px';
	// 	// button.style.top = '2px';

	// 	// document.body.appendChild(button);
	// }

	
	// addSidebarIcon(graph, sidebar, label, image, width, height, style) {

	// 	let funct = (graph, evt, cell) => {

	// 		var model = graph.getModel();
	// 		graph.stopEditing(true);
	// 		var pt = graph.getPointForEvent(evt);
	// 		var graphElement = null;
	// 		let selectedStep  = new ProcessSteps();

	// 		var YAxisSwimlane = (this.proc.ProcessSteps.filter(i => i.ShapeType == 'swimlane').length) * 200;

	// 		model.beginUpdate();
	// 		try {
	// 			if (style != "swimlane") {
	// 				if (cell != null) {
	// 					//we will check if the dragged element is start element > 1 ==> we will show error message
	// 				   if(style == 'start')
	// 				   {
	// 					var count = this.proc.ProcessSteps.filter(i => i.ShapeType == 'start' && i.SwimlaneID == cell.id).length;
	// 				   }
					   
	// 				   if(count >= 1)
	// 				   {
	// 					this.msgSer.add({ key: 'popupScreen', severity: 'error', summary: 'Error', detail: 'Cannot add more start step inside the same swimlane' });
	// 					return null;
	// 				   }

	// 				   else
	// 				   {
	// 					   debugger;
	// 				    selectedStep = this.createInstance(cell,label,style,width,height);

	// 					selectedStep.x = (pt.x - cell.geometry.x);
	// 					selectedStep.y = (pt.y - cell.geometry.y);
	// 					graphElement = graph.insertVertex(cell, null, selectedStep.Name, selectedStep.x, selectedStep.y, selectedStep.Width, selectedStep.Height, selectedStep.ShapeType);
	// 					selectedStep.SwimlaneID = parseInt(cell.id);
	// 					graph.setSelectionCells(graphElement);
	// 					selectedStep.Width = width;
	// 					selectedStep.Height = height;
	// 					this.msgSer.add({ key: 'popupScreen', severity: 'success', summary: 'Success', detail: selectedStep.ShapeType + ' Added Successfully.' });
	// 				   }
    //                  }
	// 				else {
	// 					this.msgSer.add({ key: 'popupScreen', severity: 'error', summary: 'Error', detail: 'Cannot add vertex outside swimlane' });
	// 					return null;
	// 				}
	// 			}
	// 			else {
	// 			    selectedStep = this.createInstance(cell,label,style,width,height);
					
	// 				selectedStep.x = 0;
	// 				selectedStep.y = YAxisSwimlane;
	// 				graphElement = graph.insertVertex(cell, null, selectedStep.Name, selectedStep.x, selectedStep.y, selectedStep.Width, selectedStep.Height, selectedStep.ShapeType);
	// 				selectedStep.SwimlaneID = null;
	// 				this.msgSer.add({ key: 'popupScreen', severity: 'success', summary: 'Success', detail: selectedStep.ShapeType + ' Added Successfully.' });
	// 			}
	// 		} finally {
	// 			model.endUpdate();
	// 		}
	// 		graph.setSelectionCell(graphElement);
	// 		this.proc.ProcessSteps.push(selectedStep);
	// 		this.selectedStep = selectedStep;
	// 		this.selectedStep = new ProcessSteps();
	// 	};

	// 	// Creates the image which is used as the sidebar icon (drag source)
	// 	var img = document.createElement("img");
	// 	img.setAttribute("src", image);
	// 	img.style.width = "100%";
	// 	img.style.height = "15%";
	// 	img.title = "Drag this to the diagram to create a new vertex";
	// 	sidebar.appendChild(img);

	//     this.dragElt = document.createElement("div");
	// 	this.dragElt.style.border = "dashed black 1px";
	// 	this.dragElt.style.width = "10px";
	// 	this.dragElt.style.height = "10px";

	// 	// Creates the image which is used as the drag icon (preview)
	// 	var ds = mx.mxUtils.makeDraggable(
	// 		img,
	// 		graph,
	// 		funct,
	// 		this.dragElt,
	// 		0,
	// 		0,
	// 		true,
	// 		true
	// 	);
	// 	this.dragElt = null;
	// 	ds.setGuidesEnabled(true);
	// }

	// createInstance(cell,label,style,width, height):ProcessSteps
	// {
	// 	var uniqID = this.proc.ProcessSteps.filter(i => i.ShapeType == style).length + 1;

	// 	this.count = this.count + 1;
	// 	let selectedStep = new ProcessSteps();
	// 	selectedStep.Step_ID = this.count;
	// 	selectedStep.Name = label + uniqID;
	// 	selectedStep.ShapeType = style;

	// 	selectedStep.Width = width;
	// 	selectedStep.Height = height;
	// 	selectedStep.Process_ID = this.proc.Id;
	// 	return selectedStep;
	// }

	// addPredefinedSidebarIcon(graph, sidebar, label, image) {
	// 	// Function that is executed when the image is dropped on
	// 	// the graph. The cell argument points to the cell under
	// 	// the mousepointer if there is one.
	// 	var funct = function (graph, evt, cell, x, y) {
	// 		var parent = graph.getDefaultParent();
	// 		var model = graph.getModel();

	// 		var v1 = null;

	// 		model.beginUpdate();
	// 		try {
	// 			// NOTE: For non-HTML labels the image must be displayed via the style
	// 			// rather than the label markup, so use 'image=' + image for the style.
	// 			// as follows: v1 = graph.insertVertex(parent, null, label,
	// 			// pt.x, pt.y, 120, 120, 'image=' + image);
	// 			v1 = graph.insertVertex(parent, null, label, x, y, 120, 120);
	// 			v1.setConnectable(false);

	// 			// Presets the collapsed size
	// 			v1.geometry.alternateBounds = new mx.mxRectangle(0, 0, 120, 40);

	// 			// Adds the ports at various relative locations
			
	// 		} finally {
	// 			model.endUpdate();
	// 		}

	// 		graph.setSelectionCell(v1);
	// 	};

	// 	// Creates the image which is used as the sidebar icon (drag source)
	// 	var img = document.createElement("img");
	// 	img.setAttribute("src", image);
	// 	img.style.width = "48px";
	// 	img.style.height = "48px";
	// 	img.title = "Drag this to the diagram to create a new vertex";
	// 	sidebar.appendChild(img);

	// 	var dragElt = document.createElement("div");
	// 	dragElt.style.border = "dashed black 1px";
	// 	dragElt.style.width = "120px";
	// 	dragElt.style.height = "120px";

	// 	// Creates the image which is used as the drag icon (preview)
	// 	var ds = mx.mxUtils.makeDraggable(
	// 		img,
	// 		graph,
	// 		funct,
	// 		dragElt,
	// 		0,
	// 		0,
	// 		true,
	// 		true
	// 	);
	// 	ds.setGuidesEnabled(true);
	// }
	
    // beginAddShape() {
	// 	var initial = this.graph.insertVertex(parent, null, 'swimlane1', 0, 0, 1000, 200, 'swimlane');

    //     this.count = this.count + 1;
	// 	const selectedStep = new ProcessSteps();
	// 	selectedStep.Id = null;
	// 	selectedStep.Step_ID =  this.count;
	// 	selectedStep.Name = 'swimlane1';
	// 	selectedStep.ShapeType = 'swimlane';
	// 	selectedStep.x = 100;
	// 	selectedStep.y = 100;
	// 	selectedStep.Width = 1000;
	// 	selectedStep.Height = 200;
	// 	selectedStep.SwimlaneID = null;
	// 	selectedStep.Process_ID = this.proc.Id

	// 	this.graph.selectVertices(initial);
	// 	this.proc.ProcessSteps.push(selectedStep);
	// 	this.selectedStep = selectedStep;
	// }

	// setSelectedCellValue(cell: any) {

	// 	if (cell != null) {
	// 	    if (cell.vertex == true) {

	// 			this.selectedStep = new ProcessSteps();
	// 			this.selectedStep.Id = null;
	// 			this.selectedStep.Step_ID = parseInt(cell.id);
	// 			this.selectedStep.Name = cell.value;
	// 			this.selectedStep.ShapeType = cell.style;
	// 			this.selectedStep.x = cell.geometry.x;
	// 			this.selectedStep.y = cell.geometry.y;
	// 			this.selectedStep.Width = cell.geometry.width;
	// 			this.selectedStep.Height = cell.geometry.height;

	// 			//If the selected shape is edge then we stoer the id and parent shape

	// 			if (this.selectedStep.ShapeType != 'swimlane') {
	// 				this.selectedStep.SwimlaneID = parseInt(cell.parent.id);
	// 				console.log('Parent ID : ' + this.selectedStep.SwimlaneID);
	// 			}
	// 			else {
	// 				this.selectedStep.SwimlaneID = null;
	// 			}
	// 			this.selectedStep.Process_ID = this.proc.Id
	// 			//const obj:Pro	this.selectedStep = new ProcessSteps();

	// 			//const obj:ProcessSteps  = this.proc.procSteps.filter(i => i.id == this.selectedStep.id);

	// 			this.selectedStep.ParentObjects = this.proc.ProcessSteps.find(obj => obj.Step_ID == this.selectedStep.Step_ID).ParentObjects;
	// 			this.pushToArray(this.proc, this.selectedStep);
	// 		}
	// 	}
	// }

	// DeleteEdge(arr: Process, s1: ParentShape) {
	// 	const index = arr.ProcessSteps.findIndex((e) => e.Id == s1.Id);
	// 	var res = arr.ProcessSteps.find((e) => e.Id == s1.Id);
	// 	const parentIndex = res.ParentObjects.findIndex(i => i.Id == s1.Id
	// 		&& i.ProcessSteps_ID == s1.ProcessSteps_ID
	// 		&& i.Process_ID == s1.Process_ID);
	// 		arr.ProcessSteps[index].ParentObjects[parentIndex]

	// 	arr.ProcessSteps[index].ParentObjects.splice(parentIndex,1);
	// 	this.selectedEdge =  new ParentShape();
	// }

	// updateEdge(arr: Process, s1: ParentShape) {

	// 	const index = arr.ProcessSteps.findIndex((e) => e.Step_ID == s1.ShapeID);
	// 	var res = arr.ProcessSteps.find((e) => e.Step_ID == s1.ShapeID);
	// 	const parentIndex = res.ParentObjects.findIndex(i => i.ShapeID == s1.ShapeID
	// 		&& i.ProcessSteps_ID == s1.ProcessSteps_ID
	// 		&& i.Process_ID == s1.Process_ID);
	// 	arr.ProcessSteps[index].ParentObjects[parentIndex].EdgeDesc =  s1.EdgeDesc;
	// 	this.selectedStep.ParentObjects[parentIndex] = s1;
	// }

	// pushToArray(arr: Process, obj: ProcessSteps) {
	// 	const index = arr.ProcessSteps.findIndex((e) => e.Step_ID == obj.Step_ID);
	// 	if (index === -1) {
	// 		arr.ProcessSteps.push(obj);
	// 	} else {
	// 		arr.ProcessSteps[index] = obj;
	// 	}
	// }

	// setStyle(graph) {
	// 	var style = graph.getStylesheet().getDefaultVertexStyle();

	// 	//we set style for the SHAPE_SWIMLANE on the class name called swimlane
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_SWIMLANE;
	// 	style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
	// 	style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'rgb(195, 217, 255)';
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 14;
	// 	style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
	// 	style[mx.mxConstants.STYLE_STARTSIZE] = 22;
	// 	style[mx.mxConstants.STYLE_HORIZONTAL] = false;
	// 	style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
	// 	style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
	// 	style[mx.mxConstants.STYLE_RESIZEABLE] = 1;

	// 	//delete style[mx.mxConstants.STYLE_FILLCOLOR];
	// 	graph.getStylesheet().putCellStyle('swimlane', style);

	// 	// //we set style for the SHAPE_RECT on the class name called process
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RECTANGLE;
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 14;
	// 	style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
	// 	style[mx.mxConstants.STYLE_ROUNDED] = true;
	// 	style[mx.mxConstants.STYLE_HORIZONTAL] = true;
	// 	style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
	// 	delete style[mx.mxConstants.STYLE_STARTSIZE];
	// 	style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'none';
	// 	graph.getStylesheet().putCellStyle('process', style);


	// 	// //we set style for the SHAPE_Ellipse on the class name called state
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_ELLIPSE;
	// 	style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.EllipsePerimeter;
	// 	delete style[mx.mxConstants.STYLE_ROUNDED];
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 14;
	// 	style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
	// 	graph.getStylesheet().putCellStyle('start', style);

	// 	//we set style for the SHAPE_RHOMBUS on the class name called condition
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RHOMBUS;
	// 	style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.RhombusPerimeter;
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 14;
	// 	style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
	// 	// style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'top';
	// 	// style[mx.mxConstants.STYLE_SPACING_TOP] = 40;
	// 	// style[mx.mxConstants.STYLE_SPACING_RIGHT] = 64;
	// 	graph.getStylesheet().putCellStyle('condition', style);

	// 	//we set style for the SHAPE_DOUBLE_ELLIPSE on the class name called end
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_DOUBLE_ELLIPSE;
	// 	style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.EllipsePerimeter;
	// 	// style[mx.mxConstants.STYLE_SPACING_TOP] = 28;
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 14;
	// 	style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
	// 	delete style[mx.mxConstants.STYLE_SPACING_RIGHT];
	// 	graph.getStylesheet().putCellStyle('end', style);

	// 	//we set style of normal arrow line
	// 	style = graph.getStylesheet().getDefaultEdgeStyle();
	// 	style[mx.mxConstants.STYLE_EDGE] = mx.mxEdgeStyle.ElbowConnector;
	// 	style[mx.mxConstants.STYLE_ENDARROW] = mx.mxConstants.ARROW_BLOCK;
	// 	style[mx.mxConstants.STYLE_ROUNDED] = true;
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 14;
	// 	style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
	// 	style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
	// 	style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
	//     style[mx.mxConstants.STYLE_SPACING_TOP] = 28;
	// 	graph.getStylesheet().putCellStyle('arrow', style);

	// 	//we set style of Arrow Open on the class called crossover   like ---------
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_DASHED] = true;
	// 	style[mx.mxConstants.STYLE_ENDARROW] = mx.mxConstants.ARROW_OPEN;
	// 	style[mx.mxConstants.STYLE_STARTARROW] = mx.mxConstants.ARROW_OVAL;
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 14;
	// 	style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
	// 	graph.getStylesheet().putCellStyle('crossover', style);

	// 	// Installs double click on middle control point and
	// 	// changes style of edges between empty and this value
	// 	graph.alternateEdgeStyle = 'elbow=vertical';
	// }
	// //this function used to create the entries in the popupmenu
	// createPopupMenu(graph, menu, cell, evt) {

	// 	if (cell != null) {

	// 		if (cell.edge == true) {
	// 			this.fillEdgeOptions(graph, menu);
	// 		}
	// 		else if (cell.vertex == true) {
	// 			if (cell.style == "process") {
	// 				this.fillBasicOptions(graph, menu);
	// 				this.fillRectOptions(menu);
	// 			}
	// 			else if (cell.style == "condition") {
	// 				this.fillBasicOptions(graph, menu);
	// 				this.fillConditionOptions(menu);
	// 			}
	// 			else {
	// 				this.fillBasicOptions(graph, menu);
	// 			}
	// 		}
	// 	}
	// };

	// fillEdgeOptions(graph,menu)
	// {
	// 	menu.addItem('Edit', null,  () => {
	// 		if (graph.isEnabled()) {
	// 			this.showEdgeProperties(this.graph, this.selectedEdge);
	// 		}
	// 	})

	// 	menu.addItem('Delete', null,  () => {
	// 		if (graph.isEnabled()) {
	// 			this.deleteCells();
	// 		}
	// 	})
	// }

	// fillBasicOptions(graph, menu) {
	// 	menu.addItem('Delete', null, () => {
	// 		if (graph.isEnabled()) {
	// 			this.deleteCells();
	// 		}
	// 	})
	// }

	// //this functionis used to begin fill option only for rectangle shapes
    // fillRectOptions(menu) {
	// 	menu.addItem('Set Properties', null, () => {
	// 		this.showProperties(this.graph, this.selectedStep);
	// 	});
	// }

	// //this functionis used to begin fill option only for rectangle shapes
	//  fillConditionOptions(menu) {
	// 	menu.addItem('Set Properties', null, () => {
	// 		this.showProperties(this.graph, this.selectedStep);
	// 	});
	// }

	// //this functionis used to begin fill option only for rectangle shapes
    // deleteCells() {
	// 	debugger;
	// 	this.graph.escape();	
	// 	if (this.graph.isEnabled()) {
	// 		this.graph.removeCells();

	// 		if (this.cell.vertex == true) {
	// 			if (this.selectedStep.ShapeType == 'swimlane') {
	// 				this.proc.ProcessSteps = this.proc.ProcessSteps.filter(i => i.Id != this.selectedStep.Id && i.SwimlaneID != this.selectedStep.SwimlaneID);
	// 			}
	// 			else {
	// 				this.proc.ProcessSteps = this.proc.ProcessSteps.filter(i => i.Id != this.selectedStep.Id);
	// 				this.msgSer.add({ key: 'popupScreen', severity: 'success', summary: 'Success', detail: this.selectedStep.Name + ' Deleted Successfully.' });
	// 			}
	// 			this.selectedStep = new ProcessSteps();
	// 		}
	// 		else if (this.cell.edge == true) {
    //              this.DeleteEdge(this.proc,this.selectedEdge);
	// 		}

	// 	}
	// };
	
	// mouseMove(sender, me) {
	// 	if (sender != null && me != null) {
	// 		if (this.currentState != null && me.getState() == this.currentState) {
	// 			return;
	// 		}
	// 		if (me.state != null) {
	// 			var tmp = me.state.cell;
	// 		}
	// 		if (tmp != this.currentState) {
	// 			if (this.currentState != null) {
	// 				this.dragLeave(me.getEvent(), this.currentState);
	// 			}
	// 			this.currentState = tmp;

	// 			if (this.currentState != null) {
	// 				this.dragEnter(me.getEvent(), this.currentState);
	// 			}
	// 		}
	// 	}
	// }

	// dragEnter(evt, state)   {
	// 	this.cell = state;
	// 	if (this.cell != null && this.graph.isEnabled()) {
	// 		this.setSelectedCellValue(this.cell);
	// 		this.graph.stopEditing(false);
	// 	}
	// }

	// dragLeave(evt, state) {
	// 	this.cell = state;
	// 	if (this.cell != null && this.graph.isEnabled()) {
	// 		this.graph.stopEditing(false);
	// 	}

	// 	if (state != null) {
	// 		this.graph.stopEditing(false);
	// 	}
	// }	

	// showEdgeProperties( graph, edge:ParentShape  ) {
		
	// 	var form = new mx.mxForm('properties');
	// 	var edgeDescField = form.addText('Edge Desc', edge.EdgeDesc);
	// 	var wnd = null;

	// 	var okFunction = () => {
	// 		debugger;
	// 		edge.EdgeDesc = edgeDescField.value;
	// 		graph.model.setValue(this.cell, edge.EdgeDesc);
	// 		this.updateEdge(this.proc, this.selectedEdge);
	// 		wnd.destroy();
	// 	}

	// 	var cancelFunction = () => {wnd.destroy();}

	// 	form.addButtons(okFunction, cancelFunction);
	// 	//var parent = graph.model.getParent();
	// 	var title ='Edge Properities' ;
	// 	wnd =this.showModalWindow(title, form.table, 200, 150);
	// }
	
	// showProperties( graph, cell:ProcessSteps  ) {

	
	// 	var form = new mx.mxForm('properties');
	// 	var nameField = form.addText('Name', cell.Name);
	// 	var prop1 = form.addText('Prop1', cell.Prop1|| '');
	// 	var prop2 = form.addText('Prop2', cell.Prop2 || '');
	
	// 	var wnd = null;
	
	// 	var okFunction =  ()=>{
	
	// 		cell.Name = nameField.value;
	// 		cell.Prop1 = prop1.value;
	// 		cell.Prop2 = prop2.value;
	// 		this.pushToArray(this.proc, cell);
	// 		graph.model.setValue(this.cell, cell.Name);
	// 		wnd.destroy();
	
	//    }

	// 	var cancelFunction =  () =>{
	// 		wnd.destroy();
	// 	}

	// 	form.addButtons(okFunction, cancelFunction);
	// 	var title ='Properties for '+ cell.Name ;
	// 	wnd =this.showModalWindow(title, form.table, 200, 150);
	// }
	
	// showModalWindow(title, content, width, height)
	// {
	// 	var background = document.createElement('div');
	// 	background.style.position = 'absolute';
	// 	background.style.left = '0px';
	// 	background.style.top = '0px';
	// 	background.style.right = '0px';
	// 	background.style.bottom = '0px';
	// 	background.style.background = 'black';
	// 	mx.mxUtils.setOpacity(background, 50);
	// 	document.body.appendChild(background);
		
	// 	if (mx.mxClient.IS_QUIRKS)
	// 	{
	// 		new mx.mxDivResizer(background);
	// 	}
		
	// 	var x = Math.max(0, document.body.scrollWidth/2-width/2);
	// 	var y = Math.max(10, (document.body.scrollHeight || document.documentElement.scrollHeight)/2-height*2/3);
	// 	var wnd = new mx.mxWindow(title, content, x, y, width, height, false, true);
	// 	wnd.setClosable(true);
					
	// 	// Fades the background out after after the window has been closed
	// 	wnd.addListener(mx.mxEvent.DESTROY, function(evt){
	// 	mx.mxEffects.fadeOut(background, 50, true, 10, 30, true);});

	// 	wnd.setVisible(true);
	// 	return wnd;
	// };			
}




