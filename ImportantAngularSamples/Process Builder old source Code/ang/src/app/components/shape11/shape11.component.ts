import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { mxgraph } from "mxgraph";
import { Process } from '../models/process';

declare var require: any;
const mx = require('mxgraph')({
  mxImageBasePath: 'assets/mxgraph/images',
  mxBasePath: 'assets/mxgraph'
});


@Component({
  selector: 'app-shape11',
  templateUrl: './shape11.component.html',
  styleUrls: ['./shape11.component.css']
})
export class Shape11Component implements OnInit {

	@ViewChild('graphContainer') graphContainer: ElementRef;

	ngOnInit(){}
	// ngOnInit() {
  
	//   //mxClient represent the Bootstrap Mechanisim of the mxGraph thin client
	//   if (!mx.mxClient.isBrowserSupported())
	//   {
	// 	// Displays an error message if the browser is
	// 	// not supported.
	// 	mx.mxUtils.error('Browser is not supported!', 200, false);
	//   }
  
  
	//   console.log('The version is :'+mx.mxClient.VERSION);    //It tell us the version of the mxClient
	//   console.log('Support IE:'+mx.mxClient.IS_IE);           //It tell us that the mxClient support IE 
	//   console.log('Support IE:'+mx.mxClient.IS_IE11);           //It tell us that the mxClient support IE 11.0
  
	//   const graph = new mx.mxGraph(this.graphContainer.nativeElement);
  
	//   var model = graph.getModel();
  
	//   // Auto-resizes the container (get the size fit to the content only)
	//   graph.border = 80;
	//   graph.getView().translate = new mx.mxPoint(graph.border/2, graph.border/2);
	// 	  graph.setResizeContainer(true);
	//   graph.graphHandler.setRemoveCellsFromParent(false);
  
	
  
	//   // Installs double click on middle control point and
	//   // changes style of edges between empty and this value
	//   graph.alternateEdgeStyle = 'elbow=vertical';
  
	//   // Adds automatic layout and various switches if the
	//   // graph is enabled
	//   if (graph.isEnabled())
	//   {
	// 	// Allows new connections but no dangling edges  (?? ??? ???? ??????)
	// 	graph.setConnectable(true);
	// 	graph.setAllowDanglingEdges(false);
  
	// 	// End-states are no valid sources
	// 	var previousIsValidSource = graph.isValidSource;
  
	// 	graph.isValidSource = function(cell)
	// 	{
	// 	  if (previousIsValidSource.apply(this, arguments))
	// 	  {
	// 		var style = this.getModel().getStyle(cell);
  
	// 		return style == null || !(style == 'end' || style.indexOf('end') == 0);
	// 	  }
  
	// 	  return false;
	// 	};

	// 	this.setStyle(graph);
  
	// 	// Start-states are no valid targets, we do not
	// 	// perform a call to the superclass function because
	// 	// this would call isValidSource
	// 	// Note: All states are start states in
	// 	// the example below, so we use the state
	// 	// style below 
  
	// 	//(when enable assign edge to antoher vertex we ensure that the vertex assig is not the following):-
	// 	//1-start vertex 
	// 	//2-swimlane
	// 	//3-the vertex itself
	// 	graph.isValidTarget = function(cell)           
	// 	{
	// 	  var style = this.getModel().getStyle(cell);
  
	// 	  return !this.getModel().isEdge(cell) && !this.isSwimlane(cell) &&
	// 		(style == null || !(style == 'state' || style.indexOf('state') == 0));
	// 	};
  
	// 	// Allows dropping cells into new lanes and
	// 	// lanes into new pools, but disallows dropping
	// 	// cells on edges to split edges
		
	// 	graph.setDropEnabled(false);       //This will disable moving the vertex from swimlane to another
	// 	graph.setSplitEnabled(true);       //This means that we dont allow assign edge to another vertex in swimlane
  
	// 	// Returns true for valid drop operations
	// 	graph.isValidDropTarget = function(target, cells, evt)
	// 	{
	// 	  if (this.isSplitEnabled() && this.isSplitTarget(target, cells, evt))
	// 	  {
	// 		return true;
	// 	  }
	// 	  var model = this.getModel();
	// 	  var lane = false;
	// 	  var pool = false;
	// 	  var cell = false;
  
	// 	  // Checks if any lanes or pools are selected
	// 	  for (var i = 0; i < cells.length; i++)
	// 	  {
	// 		var tmp = model.getParent(cells[i]);
	// 		lane = lane || this.isPool(tmp);
	// 		pool = pool || this.isPool(cells[i]);
  
	// 		cell = cell || !(lane || pool);
	// 	  }
  
	// 	  return !pool && cell != lane && ((lane && this.isPool(target)) ||
	// 		(cell && this.isPool(model.getParent(target))));
	// 	};
  
	// 	// Adds new method for identifying a pool
	// 	//The Below method return only true when we want to resize the inner swimlane 
	// 	//other wise it will relocate the postion of the vertex if we relocate the inner vertex
	// 	graph.isPool = function(cell)
	// 	{
	// 	  //the below command get all the mx Cells (inner swimlanes and all shapes)
	// 	  var model = this.getModel();
	// 	  //the below command get the parent swimlane that contain the inner swimlane which is Pool 1 or Pool 2
	// 	  var parent = model.getParent(cell);
	// 	  //the below command get the Parent Container for all the inner swimlanes which is parent
	// 	  var boss = model.getRoot();
  
	// 	  return parent != null && model.getParent(parent) == model.getRoot();
	// 	};
  
	// 	// Changes swimlane orientation while collapsed
	// 	graph.model.getStyle = function(cell)
	// 	{
	// 	  var style = mx.mxGraphModel.prototype.getStyle.apply(this, arguments);
  
	// 	  if (graph.isCellCollapsed(cell))
	// 	  {
	// 		if (style != null)
	// 		{
	// 		  style += ';';
	// 		}
	// 		else
	// 		{
	// 		  style = '';
	// 		}
  
	// 		style += 'horizontal=0;align=left;spacingLeft=14;';
	// 	  }
  
	// 	  return style;
	// 	};
  
	// 	// Keeps widths on collapse/expand
	// 	var foldingHandler = function(sender, evt)
	// 	{
	// 	  var cells = evt.getProperty('cells');
  
	// 	  for (var i = 0; i < cells.length; i++)
	// 	  {
	// 		var geo = graph.model.getGeometry(cells[i]);
  
	// 		if (geo.alternateBounds != null)
	// 		{
	// 		  geo.width = geo.alternateBounds.width;
	// 		}
	// 	  }
	// 	};
  
	// 	graph.addListener(mx.mxEvent.FOLD_CELLS, foldingHandler);
	//   }
  
	//   // Applies size changes to siblings and parents
	//   new mx.mxSwimlaneManager(graph);
  
	//   // Creates a stack depending on the orientation of the swimlane   (we set the setHorizantial = false)
	//   //This means that all swimlanes set vertically 
	//   var layout = new mx.mxStackLayout(graph, true);
  
	//   // Makes sure all children fit into the parent swimlane
	//   layout.resizeParent = true;
  
	//   // Applies the size to children if parent size changes
	//   layout.fill = true;
  
	//   // Only update the size of swimlanes
	//   layout.isVertexIgnored = function(vertex)
	//   {
	// 	return !graph.isSwimlane(vertex);
	//   }
  
	//   //cell parameter : represent the container swimlane that contain the shape with following properties
	//   //A-parent: mxCell                 : we see that it tell us that the inner swimlane belong to another swimlane with ID = mxCell
	//   //B-connectable: false             : we set all the swimlanes parent and childs connectable false
	//   //C-style: "swimlane"              : we set the style of the vertex (container) as swimlane
	//   //D-mxObjectId: "mxCell#9"         : we set ID for this container as mxCell39
	//   //E-value: "Pool 2"                : we set the value of the container Pool 2
	//   //F-geometry: mxGeometry {x: 220, y: 0, width: 265, height: 640, relative: false, …} 
	//   //G: we set the position of container as the above with absoulte position
	//   //H-vertex: true                     : we see that the container tell us that his type is vertex
	//   //I-source: null , target: null      : we see that the conatiner not assign to source and destination shapes 
	//   //J-children: (2) [mxCell, mxCell] : represent the 2 inner swimlane inside that the parent swimlane contain them
  
	//   //-----------------------------------------------------------------------------------------------------------//
  
	//   //for each children properties it contain the following properties
	//   //A-children                       : we see that it contain all shape as inner mxCell also like the following
	//   //B : mxCell 
	//   //C-connectable: true
	//   //D-edges: [mxCell]     : what edges connected to that vertex 
	//   //E-geometry: mxGeometry {x: 40, y: 40, width: 30, height: 30, relative: false, …} : the position of each vertex
	//   //F-id: "20"
	//   //G-mxObjectId: "mxCell#24"
	//   //H-parent: mxCell {value: "Lane2 B", geometry: mxGeometry, style: "swimlane", id: "7", vertex: true, …}
	//   //I-source: null
	//   //J-style: "state"
	//   //K-target: null
	//   //L-value: null
	//   //M-vertex: true  : it tell us that the shape type is vertex type 
  
	//   //we see that edge properties is also is mxCell[] that conatin the following
	//   //1-edge: true                     : 
	//   //we see that the mxCell tell us that is type of edge
	//   //2-geometry: mxGeometry {x: 0, y: 0, width: 0, height: 0, relative: true}  : 
	//   //we see that the mxCell style
	//   //3-id: "31"                       : mxCell ID
	//   //4-mxObjectId: "mxCell#35"        : 
	//   //5-source: mxCell {value: null, geometry: mxGeometry, style: "state", id: "20", vertex: true, …} :
	//   //we see that the edge assign to vertex with id = 20
	//   //6-style: "arrow"                 :we see that the mxCell take the class of arrow
	//   //7-value: null                    :we see that the edge without value
	  
  
	//    // Keeps the lanes and pools stacked
	//    var layoutMgr = new mx.mxLayoutManager(graph);
  
	// 	// layoutMgr.orientation = mx.mxConstants.DIRECTION_NORTH;
	//    /// layoutMgr.prototype.horizontal = true;
	//    //layoutMgr.prototype.horizontal
	//    //layoutMgr = mx.mxSwimlaneManager.prototype.horizontal;
	//    // layoutMgr.prototype.orientation = mx.mxConstants.DIRECTION_NORTH;
  
	   
	//   //when make drag the vertex this function is called
	//   layoutMgr.getLayout = function(cell)
	//   {
	// 	//This means that all swimlanes inside mxStackLayout set vertically 
	// 	layout.horizontal = false;
	// 	//graph.getModel() : means that get all the mxCell of the whole graph
	// 	//graph.getModel().getChildCount(cell) : means get all the children that the container have them 
	// 	//!model.isEdge(cell) : to make sure that  the shape we are moving is not edge
  
	// 	if (!model.isEdge(cell) && graph.getModel().getChildCount(cell) > 0 &&
	// 	  (model.getParent(cell) == model.getRoot() || graph.isPool(cell)))
	// 	{
	// 	  layout.fill = graph.isPool(cell);
  
	// 	  return layout;
	// 	}
  
	// 	return null;
	//   };
	  
	  
	  
	  
	
	//   //we create graph and assign to the variable called graph
	//   //const graph = new mx.mxGraph(this.graphContainer.nativeElement);
  
	//   try {
	// 	const parent = graph.getDefaultParent();
	// 	var l1 = graph.getModel();
	// 	graph.getModel().beginUpdate();
	// 	// // Enables rubberband selection
	// 	// new mx.mxRubberband(graph);
  
	// 	var root = undefined;
  
	// 	var data = this.loadData();
  
  
	// 	//var filteredSwimlane = data.filter(x => x.shapeType == "swimLane");
	// 	var dict = {};
	// 	var swimLane;
	// 	debugger;
	// 	// run through each element in json
	// 	data.procSteps.forEach(function (element) {
	// 	  var id = element.id;
	// 	  var name = element.name;
	// 	  //var text = element.Text;
  
	// 	  if(element.shapeType == "swimlane")
	// 	  {
	// 		 swimLane = graph.insertVertex(parent, id, name, element.x, element.y, element.width, element.height,'swimlane');
	// 	  }
	// 	  else {
	 
	// 		if (element.shapeType == "start") {
	// 		  var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.width, element.height, 'start');
	// 		}
	// 		else if (element.shapeType == "end") {
	// 		  var graphElement = graph.insertVertex(swimLane,id, name, element.x, element.y, element.width, element.height, 'end');
	// 		}   
	// 		else if (element.shapeType == "process") {
	// 			debugger;
	// 		  var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.width, element.height, 'process');
	// 		}
	// 		else if (element.shapeType == "condition") {
	// 		  var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.width, element.height, "condition");
	// 		}
	// 		else {
	// 		  var graphElement = graph.insertVertex(swimLane, id, name, element.x, element.y, element.width, element.height, "process");
	// 		}
  
			   
	// 		// check if any parent element
	// 		if (element.parentObjects.length > 0) {
	// 		  // run through each parent element
	// 		  element.parentObjects.forEach(function (parentObj) {
  
	// 			debugger;
	// 			var parentGraphElement = dict[parentObj.parentShape];
	// 		   // add line between current element and parent
	// 		   if(parentObj.edgeDesc != null)
	// 		   {
	// 			 graph.insertEdge(swimLane, null,parentObj.edgeDesc , parentGraphElement, graphElement);
 
	// 		   }
	// 		   else
	// 		   {
	// 			 graph.insertEdge(swimLane, null,'', parentGraphElement, graphElement);
 
	// 		   }
	// 		  });
	// 		} else {
	// 		  // set root for layouting
	// 		  root = graphElement;
	// 		}
	// 		// add element to dictionary. this is needed to find object later(parent)
	// 		dict[id] = graphElement;
	// 	  }
	// 	});
  
  
	// 	// Creates a layout algorithm to be used with the graph
	// 	//  var layout = new mx.mxHierarchicalLayout(graph, mx.mxConstants.DIRECTION_WEST);
  
	// 	// Moves stuff wider apart than usual
	// 	//    layout.forceConstant = 140;
	// 	//    if (root) {
	// 	//        layout.execute(parent, root);
	// 	//    }
  
	//   } finally {
	// 	graph.getModel().endUpdate();
	// 	//   new mx.mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
	//   }
  
	// }
	// proc: Process
	// loadData(): Process {

	// 	this.proc =
	// 	{
	// 		procSteps: [
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [],
	// 				id: 2,
	// 				name: 'swimlane1',
	// 				shapeType: 'swimlane',
	// 				x: 0,
	// 				y: 0,
	// 				width: 1000,
	// 				height: 260,
	// 				swimlane: null,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [],
	// 				id: 3,
	// 				name: 'Start1',
	// 				shapeType: 'start',
	// 				x: 40,
	// 				y: 60,
	// 				width: 100,
	// 				height: 100,
	// 				swimlane: 2,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 4,
	// 						parentShape: 3,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 4,
	// 				name: 'Step1',
	// 				shapeType: 'process',
	// 				x: 250,
	// 				y: 80,
	// 				width: 100,
	// 				height: 70,
	// 				swimlane: 2,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 5,
	// 						parentShape: 4,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 5,
	// 				name: 'Condition1',
	// 				shapeType: 'condition',
	// 				x: 440,
	// 				y: 70,
	// 				width: 100,
	// 				height: 100,
	// 				swimlane: 2,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 6,
	// 						parentShape: 5,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 6,
	// 				name: 'Step2',
	// 				shapeType: 'process',
	// 				x: 580,
	// 				y: 10,
	// 				width: 100,
	// 				height: 70,
	// 				swimlane: 2,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 7,
	// 						parentShape: 5,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 7,
	// 				name: 'Step3',
	// 				shapeType: 'process',
	// 				x: 580,
	// 				y: 90,
	// 				width: 100,
	// 				height: 70,
	// 				swimlane: 2,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 8,
	// 						parentShape: 5,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 8,
	// 				name: 'Step4',
	// 				shapeType: 'process',
	// 				x: 580,
	// 				y: 170,
	// 				width: 100,
	// 				height: 70,
	// 				swimlane: 2,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 9,
	// 						parentShape: 6,
	// 						processID: 1
	// 					},
	// 					{
	// 						edgeDesc: '',
	// 						id: 9,
	// 						parentShape: 7,
	// 						processID: 1
	// 					},
	// 					{
	// 						edgeDesc: '',
	// 						id: 9,
	// 						parentShape: 8,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 9,
	// 				name: 'End1',
	// 				shapeType: 'end',
	// 				x: 780,
	// 				y: 70,
	// 				width: 100,
	// 				height: 100,
	// 				swimlane: 2,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [],
	// 				id: 18,
	// 				name: 'Swimlane2',
	// 				shapeType: 'swimlane',
	// 				x: 0,
	// 				y: 260,
	// 				width: 1000,
	// 				height: 200,
	// 				swimlane: null,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [],
	// 				id: 19,
	// 				name: 'Start2',
	// 				shapeType: 'start',
	// 				x: 60,
	// 				y: 50,
	// 				width: 100,
	// 				height: 100,
	// 				swimlane: 18,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 20,
	// 						parentShape: 19,
	// 						processID: 1
	// 					},
	// 					{
	// 						edgeDesc: '',
	// 						id: 20,
	// 						parentShape: 6,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 20,
	// 				name: 'Step5',
	// 				shapeType: 'process',
	// 				x: 260,
	// 				y: 60,
	// 				width: 100,
	// 				height: 70,
	// 				swimlane: 18,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 21,
	// 						parentShape: 20,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 21,
	// 				name: 'Step6',
	// 				shapeType: 'process',
	// 				x: 460,
	// 				y: 60,
	// 				width: 100,
	// 				height: 70,
	// 				swimlane: 18,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 22,
	// 						parentShape: 21,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 22,
	// 				name: 'End2',
	// 				shapeType: 'end',
	// 				x: 770,
	// 				y: 40,
	// 				width: 100,
	// 				height: 100,
	// 				swimlane: 18,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [],
	// 				id: 27,
	// 				name: 'Swimlane3',
	// 				shapeType: 'swimlane',
	// 				x: 0,
	// 				y: 460,
	// 				width: 1000,
	// 				height: 200,
	// 				swimlane: null,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [],
	// 				id: 28,
	// 				name: 'Start3',
	// 				shapeType: 'start',
	// 				x: 80,
	// 				y: 60,
	// 				width: 100,
	// 				height: 100,
	// 				swimlane: 27,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 29,
	// 						parentShape: 28,
	// 						processID: 1
	// 					},
	// 					{
	// 						edgeDesc: '',
	// 						id: 29,
	// 						parentShape: 8,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 29,
	// 				name: 'Step7',
	// 				shapeType: 'process',
	// 				x: 270,
	// 				y: 70,
	// 				width: 100,
	// 				height: 70,
	// 				swimlane: 27,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 30,
	// 						parentShape: 29,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 30,
	// 				name: 'Step8',
	// 				shapeType: 'process',
	// 				x: 470,
	// 				y: 70,
	// 				width: 100,
	// 				height: 70,
	// 				swimlane: 27,
	// 				process_ID: 1
	// 			},
	// 			{
	// 				prop1: '',
	// 				prop2: '',
	// 				parentObjects: [
	// 					{
	// 						edgeDesc: '',
	// 						id: 31,
	// 						parentShape: 30,
	// 						processID: 1
	// 					}
	// 				],
	// 				id: 31,
	// 				name: 'End3',
	// 				shapeType: 'end',
	// 				x: 800,
	// 				y: 60,
	// 				width: 100,
	// 				height: 100,
	// 				swimlane: 27,
	// 				process_ID: 1
	// 			}
	// 		],
	// 		ID: 1,
	// 		Name: 'process 1'
	// 	}
	// 	return this.proc;
	// }

	// setStyle(graph) {
	// 	var style = graph.getStylesheet().getDefaultVertexStyle();

	// 	//we set style for the SHAPE_SWIMLANE on the class name called swimlane
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_SWIMLANE;
	// 	style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
	// 	style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'white';
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 11;
	// 	style[mx.mxConstants.STYLE_STARTSIZE] = 22;
	// 	style[mx.mxConstants.STYLE_HORIZONTAL] = false;
	// 	style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
	// 	style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
	// 	//delete style[mx.mxConstants.STYLE_FILLCOLOR];
	// 	graph.getStylesheet().putCellStyle('swimlane', style);

	// 	// //we set style for the SHAPE_RECT on the class name called process
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RECTANGLE;
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 12;
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
	// 	graph.getStylesheet().putCellStyle('start', style);

	// 	//we set style for the SHAPE_RHOMBUS on the class name called condition
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RHOMBUS;
	// 	style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.RhombusPerimeter;
	// 	// style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'top';
	// 	// style[mx.mxConstants.STYLE_SPACING_TOP] = 40;
	// 	// style[mx.mxConstants.STYLE_SPACING_RIGHT] = 64;
	// 	graph.getStylesheet().putCellStyle('condition', style);

	// 	//we set style for the SHAPE_DOUBLE_ELLIPSE on the class name called end
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_DOUBLE_ELLIPSE;
	// 	style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.EllipsePerimeter;
	// 	// style[mx.mxConstants.STYLE_SPACING_TOP] = 28;
	// 	style[mx.mxConstants.STYLE_FONTSIZE] = 12;
	// 	style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
	// 	delete style[mx.mxConstants.STYLE_SPACING_RIGHT];
	// 	graph.getStylesheet().putCellStyle('end', style);

	// 	//we set style of normal arrow line
	// 	style = graph.getStylesheet().getDefaultEdgeStyle();
	// 	style[mx.mxConstants.STYLE_EDGE] = mx.mxEdgeStyle.ElbowConnector;
	// 	style[mx.mxConstants.STYLE_ENDARROW] = mx.mxConstants.ARROW_BLOCK;
	// 	style[mx.mxConstants.STYLE_ROUNDED] = true;
	// 	style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
	// 	style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
	// 	graph.getStylesheet().putCellStyle('arrow', style);

	// 	//we set style of Arrow Open on the class called crossover   like ---------
	// 	style = mx.mxUtils.clone(style);
	// 	style[mx.mxConstants.STYLE_DASHED] = true;
	// 	style[mx.mxConstants.STYLE_ENDARROW] = mx.mxConstants.ARROW_OPEN;
	// 	style[mx.mxConstants.STYLE_STARTARROW] = mx.mxConstants.ARROW_OVAL;
	// 	graph.getStylesheet().putCellStyle('crossover', style);

	// 	// Installs double click on middle control point and
	// 	// changes style of edges between empty and this value
	// 	graph.alternateEdgeStyle = 'elbow=vertical';
	// }
	
}


