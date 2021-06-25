import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { mxgraph } from "mxgraph";

declare var require: any;
const mx = require('mxgraph')({
  mxImageBasePath: 'assets/mxgraph/images',
  mxBasePath: 'assets/mxgraph'
});

@Component({
  selector: 'app-shape06',
  templateUrl: './shape06.component.html',
  styleUrls: ['./shape06.component.css']
})
export class Shape06Component implements AfterViewInit {

  @ViewChild('graphContainer') container: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
   mx. mxEvent.disableContextMenu(document.body);
				
    // Changes some default colors
    mx.mxConstants.HANDLE_FILLCOLOR = '#99ccff';
    mx.mxConstants.HANDLE_STROKECOLOR = '#0088cf';
    mx.mxConstants.VERTEX_SELECTION_COLOR = '#00a8ff';
    
    // Creates the graph inside the given container
    var graph = new mx.mxGraph(this.container.nativeElement);
    //we enable tooltip on each vertex
    graph.setTooltips(true);

    // Enables rubberband selection
    new mx.mxRubberband(graph);
    
    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0).
    var parent = graph.getDefaultParent();
            
    // Adds cells to the model in a single step
    graph.getModel().beginUpdate();
    var v1,v2,e1;
    try
    {
       v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
       v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
       e1 = graph.insertEdge(parent, null, '', v1, v2);
    }
    finally
    {
      // Updates the display
      graph.getModel().endUpdate();
    }
    
    // Creates a new overlay with an image and a tooltip and makes it "transparent" to events
    var overlay = new mx.mxCellOverlay(
      new mx.mxImage('../../../assets/images/checkmark.gif', 16, 16),
      'Overlay tooltip');

    var mxCellRendererInstallCellOverlayListeners = mx.mxCellRenderer.prototype.installCellOverlayListeners;
    mx.mxCellRenderer.prototype.installCellOverlayListeners = function(state, overlay, shape)
    {
      mxCellRendererInstallCellOverlayListeners.apply(this, arguments);
      var graph  = state.view.graph;

      mx.mxEvent.addGestureListeners(shape.node,
        function (evt)
        {
          graph.fireMouseEvent(mx.mxEvent.MOUSE_DOWN,
              new mx.mxMouseEvent(evt, state));
        },
        function (evt)
        {
          graph.fireMouseEvent(mx.mxEvent.MOUSE_MOVE,
            new mx.mxMouseEvent(evt, state));
        });
      
      if (!mx.mxClient.IS_TOUCH)
      {
        mx.mxEvent.addListener(shape.node, 'mouseup', function (evt)
        {
          debugger;
          overlay.fireEvent(new mx.mxEventObject(mx.mxEvent.CLICK,
              'event', evt, 'cell', state.cell));
        });
      }



    };

    
    graph.addListener(mx.mxEvent.CLICK, function(sender, event){
      debugger;
              // var mouseEvent = event.getProperty('event');
              // var selectedCell = event.getProperty('cell');
          
          });
    
    // Sets the overlay for the cell in the graph
    graph.addCellOverlay(v1, overlay);
    
    // Configures automatic expand on mouseover
    //Note : the below command will make expand the inner option of the tooltip
    graph.popupMenuHandler.autoExpand = true;

    //Installs context menu
    //In this part we create menu on the shapes
    graph.popupMenuHandler.factoryMethod = function(menu, cell, evt)
    {
      // debugger;
      // var mouseEvent = evt.getProperty('event');
      // var selectedCell = evt.getProperty('cell');

      // var cell = evt.getProperty("cell");
      // var id = cell.id;

      debugger;

      if(cell.geometry.__proto__ == new mx.mxRectangle(0, 0,0,0))
      {
        console.log('rect start');
      }
      else
      {
        console.log('rect end');
      }


      menu.addItem('Item 1', null, function()
        {
        alert('Item 1');
        });
      
      menu.addItem('Item 2', null, function()
        {
        alert('Item 2');
        });

      menu.addSeparator();
      
      var submenu1 = menu.addItem('Submenu 1', null, null);
      
      menu.addItem('Subitem 1', null, function()
        {
        alert('Subitem 1');
        }, submenu1);
      menu.addItem('Subitem 2', null, function()
        {
        alert('Subitem 2');
        }, submenu1);
    };
  }
};