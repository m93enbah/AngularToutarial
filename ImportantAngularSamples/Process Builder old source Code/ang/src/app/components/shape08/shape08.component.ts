import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { mxgraph } from "mxgraph";

declare var require: any;
const mx = require('mxgraph')({
    mxImageBasePath: 'assets/mxgraph/images',
    mxBasePath: 'assets/mxgraph'
});


@Component({
  selector: 'app-shape08',
  templateUrl: './shape08.component.html',
  styleUrls: ['./shape08.component.css']
})
export class Shape08Component implements AfterViewInit {

  @ViewChild('graphContainer') graphContainer: ElementRef;

  ngAfterViewInit() {
    //we create graph and assign to the variable called graph
    const graph = new mx.mxGraph(this.graphContainer.nativeElement);

    try {
      const parent = graph.getDefaultParent();
      graph.getModel().beginUpdate();
      // // Enables rubberband selection
      // new mx.mxRubberband(graph);

      var root = undefined;

      var data = this.loadData();

      var dict = {};
      // run through each element in json
      data.forEach(function (element) {
        debugger;
        var name = element.name;
        // create graph element

        if (element.shapeType == "circle") {
          var graphElement = graph.insertVertex(parent, null, name, element.x, element.y, element.width, element.height, 'shape=doubleEllipse;perimeter=ellipsePerimeter;position=absolute');
        }
        else if (element.shapeType == "rect") {
          var graphElement = graph.insertVertex(parent, null, name, element.x, element.y, element.width, element.height, 'process');
        }
        else if (element.shapeType == "ellipse") {
          var graphElement = graph.insertVertex(parent, null, name, element.x, element.y, element.width, element.height, "shape=ellipse;position=absolute");
        }
        else if (element.shapeType == "rhombus") {
          var graphElement = graph.insertVertex(parent, null, name, element.x, element.y, element.width, element.height, "shape=rhombus;position=absolute");
        }
        else {
          var graphElement = graph.insertVertex(parent, null, name, element.x, element.y, element.width, element.height, "position=absolute");

        }


        // check if any parent element
        if (element.parentObjects.length > 0) {
          // run through each parent element
          element.parentObjects.forEach(function (parentObj) {
            var parentGraphElement = dict[parentObj.name];
            // add line between current element and parent
            graph.insertEdge(parent, null, '', parentGraphElement, graphElement);
          });
        } else {
          // set root for layouting
          root = graphElement;
        }
        // add element to dictionary. this is needed to find object later(parent)
        dict[name] = graphElement;
      });







      var button = mx.mxUtils.button('Delete Edges', function (evt) {
        if (!graph.isSelectionEmpty()) {
          // Creates a copy of the selection array to preserve its state
          var cells = graph.getSelectionCells();
          var bounds = graph.getView().getBounds(cells);
  
          // Function that is executed when the image is dropped on
          // the graph. The cell argument points to the cell under
          // the mousepointer if there is one.
          var funct = function (graph, evt, cell) {
            graph.stopEditing(false);
  
            var pt = graph.getPointForEvent(evt);
            var dx = pt.x - bounds.x;
            var dy = pt.y - bounds.y;
  
            graph.setSelectionCells(graph.importCells(cells, dx, dy, cell));
          }
  
          // Creates the image which is used as the drag icon (preview)
        // var img = toolbar.addMode(null, 'editors/images/outline.gif', funct);
       //   mx.mxUtils.makeDraggable(img, graph, funct);
        }
      });
  
      button.style.position = 'absolute';
      button.style.left = '2px';
      button.style.top = '2px';
  
      document.body.appendChild(button);

    












      // Creates a layout algorithm to be used with the graph
      //  var layout = new mx.mxHierarchicalLayout(graph, mx.mxConstants.DIRECTION_WEST);

      // Moves stuff wider apart than usual
      //    layout.forceConstant = 140;
      //    if (root) {
      //        layout.execute(parent, root);
      //    }

    } finally {
      graph.getModel().endUpdate();
      //   new mx.mxHierarchicalLayout(graph).execute(graph.getDefaultParent());
    }
  }

  loadData(): any[] {
    var lst = [
      {
        name: 'Start',
        parentObjects: [],
        shapeType: 'circle',
        x: 0,
        y: 0,
        width: 80,
        height: 80,
        swimlane: 1
      },
      {
        name: 'Step01',
        included: true,
        shapeType: 'ellipse',
        parentObjects: [
          {
            name: 'Start',
          }
        ],
        x: 200,
        y: 0,
        width: 80,
        height: 80,
        swimlane: 1
      },
      {
        name: 'Decision',
        included: true,
        shapeType: 'rhombus',
        parentObjects: [
          {
            name: 'Step01',
          }
        ],
        x: 400,
        y: 0,
        width: 80,
        height: 80,
        swimlane: 1
      },
      {
        name: 'Option 01',
        included: true,
        shapeType: 'rect',
        parentObjects: [
          {
            name: 'Decision',
          }
        ],
        x: 600,
        y: 0,
        width: 80,
        height: 80,
        swimlane: 1
      },
      {
        name: 'Option 02',
        included: true,
        shapeType: 'rect',
        parentObjects: [
          {
            name: 'Decision',
          }
        ],
        x: 600,
        y: 200,
        width: 80,
        height: 80,
        swimlane: 1
      },
      {
        name: 'End',
        included: true,
        shapeType: 'circle',
        parentObjects: [
          {
            name: 'Option 01',
          },
          {
            name: 'Option 02',
          }
        ],
        x: 800,
        y: 0,
        width: 80,
        height: 80,
        swimlane: 1
      }
      , {
        name: 'Start02',
        included: true,
        shapeType: 'ellipse',

        parentObjects: [
          {
            name: 'Option 01',
          }
        ],
        x: 200,
        y: 400,
        width: 80,
        height: 80,
        swimlane: 2
      },
      {
        name: 'Decision02',
        included: true,
        shapeType: 'rhombus',
        parentObjects: [
          {
            name: 'Start02',
          }
        ],
        x: 400,
        y: 400,
        width: 80,
        height: 80,
        swimlane: 2
      },
      {
        name: 'Option 03',
        included: true,
        shapeType: 'rect',
        parentObjects: [
          {
            name: 'Decision02',
          }
        ],
        x: 600,
        y: 400,
        width: 80,
        height: 80,
        swimlane: 2
      },
      {
        name: 'Option 04',
        included: true,
        shapeType: 'rect',
        parentObjects: [
          {
            name: 'Decision02',
          }
        ],
        x: 600,
        y: 600,
        width: 80,
        height: 80,
        swimlane: 2
      },
      {
        name: 'End02',
        included: true,
        shapeType: 'circle',
        parentObjects: [
          {
            name: 'Option 03',
          },
          {
            name: 'Option 04',
          }
        ],
        x: 800,
        y: 400,
        width: 80,
        height: 80,
        swimlane: 2
      }
    ]
    return lst;
  }
}


