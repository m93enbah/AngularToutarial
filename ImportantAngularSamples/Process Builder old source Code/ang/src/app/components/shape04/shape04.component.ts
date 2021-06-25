import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { mxgraph } from "mxgraph";

declare var require: any;
const mx = require('mxgraph')({
  mxImageBasePath: 'assets/mxgraph/images',
  mxBasePath: 'assets/mxgraph'
});

@Component({
  selector: 'app-shape04',
  templateUrl: './shape04.component.html',
  styleUrls: ['./shape04.component.css']
})
export class Shape04Component implements AfterViewInit {
 

  @ViewChild('graphContainer') container: ElementRef;


  ngAfterViewInit(): void {

		// Creates the div for the toolbar
    var tbContainer = document.createElement('div');
    tbContainer.style.position = 'absolute';
    tbContainer.style.overflow = 'hidden';
    tbContainer.style.padding = '2px';
    tbContainer.style.left = '0px';
    tbContainer.style.top = '26px';
    tbContainer.style.width = '24px';
    tbContainer.style.bottom = '0px';
    //we append tbContainer inside the document
    document.body.appendChild(tbContainer);
  
    // Creates new toolbar without event processing  
    //(the toolbar variable represent the toolbar tab)
    var toolbar = new mx.mxToolbar(tbContainer);
    toolbar.enabled = false;

    // Workaround for Internet Explorer ignoring certain styles
    if (mx.mxClient.IS_QUIRKS)
    {
      document.body.style.overflow = 'hidden';
      //we make the toolbar tab resizable
      new mx.mxDivResizer(tbContainer);
      //we make the DIV container resizable
      new mx.mxDivResizer(this.container);
    }

    // Creates the model and the graph inside the container
    // using the fastest rendering available on the browser
    var model = new mx.mxGraphModel();
    var graph = new mx.mxGraph(this.container.nativeElement, model);
    //we enable dragable inside the mxGraph
    graph.dropEnabled = true;
    


    // Matches DnD inside the graph
    mx.mxDragSource.prototype.getDropTarget = function(graph, x, y)
    {
      var cell = graph.getCellAt(x, y);
      
      if (!graph.isValidDropTarget(cell))
      {
        cell = null;
      }
      console.log('Value Is : '+cell);
      return cell;
    };


    // Enables new connections in the graph
    graph.setConnectable(true);
    graph.setMultigraph(false);


    // Stops editing on enter or escape keypress
    var keyHandler = new mx.mxKeyHandler(graph);
    var rubberband = new mx.mxRubberband(graph);
    

    //this function is used to add images inside toolbar
    var addVertex = function(icon, w, h, style)
    {
      //geometry: mxGeometry
      //height: 200,width: 200,x: 0,y: 0,__proto__: mxRectangle,style: 
      //"shape=swimlane;startSize=20;value: null,vertex: false
      var vertex = new mx.mxCell(null, new mx.mxGeometry(0, 0, w, h), style);
      //we set property vertex as vertex shape (by default )
      //vertex: true
      vertex.setVertex(true);
      //the below command is used to add vertex (mxCell) inside the graph


      //toolbar : represent the toolbar tab 
      //graph   : represent the graph editor
      //vertex  : represent the mxCell that inserted in th toolbar tab
      //icon    : represent the icon that represent the design of the shapes
      addToolbarItem(graph, toolbar, vertex, icon);
    };
    
    debugger;
    //The below command is used to assign shapes in the toolbar with assign style for each image
    addVertex('../../../assets/images/swimlane.gif', 1000, 200, 'shape=swimlane;startSize=20;');
    addVertex('../../../assets/images/rectangle.gif', 100, 100, 'shape=rectangle');
    addVertex('../../../assets/images/rounded.gif', 100, 100, 'shape=rounded');
    addVertex('../../../assets/images/ellipse.gif', 100, 100, 'shape=ellipse');
    addVertex('../../../assets/images/rhombus.gif', 100, 100, 'shape=rhombus');
    addVertex('../../../assets/images/triangle.gif', 100, 100, 'shape=triangle');
    addVertex('../../../assets/images/cylinder.gif', 100, 100, 'shape=cylinder');
    addVertex('../../../assets/images/actor.gif', 100, 100, 'shape=actor');
    //this below command is add line in the toolbar
    toolbar.addLine();
    

    //-------------------------Make custom shapes----------------------------------------/
    var button = mx.mxUtils.button('Create toolbar entry from selection', function(evt)
    {
      if (!graph.isSelectionEmpty())
      {
        // Creates a copy of the selection array to preserve its state
        var cells = graph.getSelectionCells();
        var bounds = graph.getView().getBounds(cells);
        
        // Function that is executed when the image is dropped on
        // the graph. The cell argument points to the cell under
        // the mousepointer if there is one.
        var funct = function(graph, evt, cell)
        {
          graph.stopEditing(false);
  
          var pt = graph.getPointForEvent(evt);
          var dx = pt.x - bounds.x;
          var dy = pt.y - bounds.y;
          
          graph.setSelectionCells(graph.importCells(cells, dx, dy, cell));
        }
  
        // Creates the image which is used as the drag icon (preview)
        var img = toolbar.addMode(null, 'editors/images/outline.gif', funct);
        mx.mxUtils.makeDraggable(img, graph, funct);
      }
    });

    button.style.position = 'absolute';
    button.style.left = '2px';
    button.style.top = '2px';
    
    document.body.appendChild(button);
  }
}


//this function is used to add image inside toolbar
function addToolbarItem(graph, toolbar, prototype, image)
{
  // Function that is executed when the0 image is dropped on
  // the graph. The cell argument points to the cell under
  // the mousepointer if there is one.
  var funct = function(graph, evt, cell)
  {
    graph.stopEditing(false);
    var pt = graph.getPointForEvent(evt);
    debugger;
    var vertex = graph.getModel().cloneCell(prototype);
    vertex.geometry.x = pt.x;
    vertex.geometry.y = pt.y;
    
    graph.setSelectionCells(graph.importCells([vertex], 0, 0, cell));
  }
  // Creates the image which is used as the drag icon (preview)
  var img = toolbar.addMode(null, image, funct);
  mx.mxUtils.makeDraggable(img, graph, funct);
}

