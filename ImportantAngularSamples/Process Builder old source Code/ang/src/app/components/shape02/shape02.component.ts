import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { mxgraph } from "mxgraph";

declare var require: any;
const mx = require('mxgraph')({
    mxImageBasePath: 'assets/mxgraph/images',
    mxBasePath: 'assets/mxgraph'
});



@Component({
  selector: 'app-shape02',
  templateUrl: './shape02.component.html',
  styleUrls: ['./shape02.component.css']
})
export class Shape02Component implements AfterViewInit {

  @ViewChild('graphContainer') graphContainer: ElementRef;

  ngAfterViewInit() {
    const graph = new mx.mxGraph(this.graphContainer.nativeElement);

    var model = graph.getModel();

    // Auto-resizes the container (get the size fit to the content only)
    graph.border = 80;
    graph.getView().translate = new mx.mxPoint(graph.border/2, graph.border/2);
		graph.setResizeContainer(true);
    graph.graphHandler.setRemoveCellsFromParent(false);

    // Changes the default vertex style in-place    
    //this variable style contain the default style that comes from mxConstant.js
    var style = graph.getStylesheet().getDefaultVertexStyle();

    //we set style for the SHAPE_SWIMLANE on the class name called swimlane
    style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_SWIMLANE;
    style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
    style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'white';
    style[mx.mxConstants.STYLE_FONTSIZE] = 11;
    style[mx.mxConstants.STYLE_STARTSIZE] = 22;
    style[mx.mxConstants.STYLE_HORIZONTAL] = true;
    style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
    style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
    delete style[mx.mxConstants.STYLE_FILLCOLOR];
    graph.getStylesheet().putCellStyle('swimlane', style);

    //we set style for the SHAPE_RECT on the class name called process
    style = mx.mxUtils.clone(style);
    style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RECTANGLE;
    style[mx.mxConstants.STYLE_FONTSIZE] = 10;
    style[mx.mxConstants.STYLE_ROUNDED] = true;
    style[mx.mxConstants.STYLE_HORIZONTAL] = true;
    style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'middle';
    delete style[mx.mxConstants.STYLE_STARTSIZE];
    style[mx.mxConstants.STYLE_LABEL_BACKGROUNDCOLOR] = 'none';
    graph.getStylesheet().putCellStyle('process', style);

    //we set style for the SHAPE_Ellipse on the class name called state
    style = mx.mxUtils.clone(style);
    style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_ELLIPSE;
    style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.EllipsePerimeter;
    delete style[mx.mxConstants.STYLE_ROUNDED];
    graph.getStylesheet().putCellStyle('state', style);

    //we set style for the SHAPE_RHOMBUS on the class name called condition
    style = mx.mxUtils.clone(style);
    style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_RHOMBUS;
    style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.RhombusPerimeter;
    style[mx.mxConstants.STYLE_VERTICAL_ALIGN] = 'top';
    style[mx.mxConstants.STYLE_SPACING_TOP] = 40;
    style[mx.mxConstants.STYLE_SPACING_RIGHT] = 64;
    graph.getStylesheet().putCellStyle('condition', style);

    //we set style for the SHAPE_DOUBLE_ELLIPSE on the class name called end
    style = mx.mxUtils.clone(style);
    style[mx.mxConstants.STYLE_SHAPE] = mx.mxConstants.SHAPE_DOUBLE_ELLIPSE;
    style[mx.mxConstants.STYLE_PERIMETER] = mx.mxPerimeter.EllipsePerimeter;
    style[mx.mxConstants.STYLE_SPACING_TOP] = 28;
    style[mx.mxConstants.STYLE_FONTSIZE] = 14;
    style[mx.mxConstants.STYLE_FONTSTYLE] = 1;
    delete style[mx.mxConstants.STYLE_SPACING_RIGHT];
    graph.getStylesheet().putCellStyle('end', style);

    //we set style of normal arrow line
    style = graph.getStylesheet().getDefaultEdgeStyle();
    style[mx.mxConstants.STYLE_EDGE] = mx.mxEdgeStyle.ElbowConnector;
    style[mx.mxConstants.STYLE_ENDARROW] = mx.mxConstants.ARROW_BLOCK;
    style[mx.mxConstants.STYLE_ROUNDED] = true;
    style[mx.mxConstants.STYLE_FONTCOLOR] = 'black';
    style[mx.mxConstants.STYLE_STROKECOLOR] = 'black';
    graph.getStylesheet().putCellStyle('arrow', style);

    //we set style of Arrow Open on the class called crossover   like ---------
    style = mx.mxUtils.clone(style);
    style[mx.mxConstants.STYLE_DASHED] = true;
    style[mx.mxConstants.STYLE_ENDARROW] = mx.mxConstants.ARROW_OPEN;
    style[mx.mxConstants.STYLE_STARTARROW] = mx.mxConstants.ARROW_OVAL;
    graph.getStylesheet().putCellStyle('crossover', style);

    // Installs double click on middle control point and
    // changes style of edges between empty and this value
    graph.alternateEdgeStyle = 'elbow=vertical';

    // Adds automatic layout and various switches if the
    // graph is enabled
    if (graph.isEnabled())
    {
      // Allows new connections but no dangling edges  (من دون حواف متدلية)
      graph.setConnectable(true);
      graph.setAllowDanglingEdges(false);

      // End-states are no valid sources
      var previousIsValidSource = graph.isValidSource;

      graph.isValidSource = function(cell)
      {
        if (previousIsValidSource.apply(this, arguments))
        {
          var style = this.getModel().getStyle(cell);

          return style == null || !(style == 'end' || style.indexOf('end') == 0);
        }

        return false;
      };

      // Start-states are no valid targets, we do not
      // perform a call to the superclass function because
      // this would call isValidSource
      // Note: All states are start states in
      // the example below, so we use the state
      // style below 

      //(when enable assign edge to antoher vertex we ensure that the vertex assig is not the following):-
      //1-start vertex 
      //2-swimlane
      //3-the vertex itself
      graph.isValidTarget = function(cell)           
      {
        debugger;
        var style = this.getModel().getStyle(cell);

        return !this.getModel().isEdge(cell) && !this.isSwimlane(cell) &&
          (style == null || !(style == 'state' || style.indexOf('state') == 0));
      };

      // Allows dropping cells into new lanes and
      // lanes into new pools, but disallows dropping
      // cells on edges to split edges
      graph.setDropEnabled(true);       //This will disable moving the vertex from swimlane to another
      graph.setSplitEnabled(true);       //This means that we dont allow assign edge to another vertex in swimlane

      // Returns true for valid drop operations
      graph.isValidDropTarget = function(target, cells, evt)
      {
        if (this.isSplitEnabled() && this.isSplitTarget(target, cells, evt))
        {
          return true;
        }
        var model = this.getModel();
        var lane = false;
        var pool = false;
        var cell = false;

        // Checks if any lanes or pools are selected
        for (var i = 0; i < cells.length; i++)
        {
          var tmp = model.getParent(cells[i]);
          lane = lane || this.isPool(tmp);
          pool = pool || this.isPool(cells[i]);

          cell = cell || !(lane || pool);
        }

        return !pool && cell != lane && ((lane && this.isPool(target)) ||
          (cell && this.isPool(model.getParent(target))));
      };

      // Adds new method for identifying a pool
      //The Below method return only true when we want to resize the inner swimlane 
      //other wise it will relocate the postion of the vertex if we relocate the inner vertex
      graph.isPool = function(cell)
      {
        debugger;
        //the below command get all the mx Cells (inner swimlanes and all shapes)
        var model = this.getModel();
        //the below command get the parent swimlane that contain the inner swimlane which is Pool 1 or Pool 2
        var parent = model.getParent(cell);
        //the below command get the Parent Container for all the inner swimlanes which is parent
        var boss = model.getRoot();

        return parent != null && model.getParent(parent) == model.getRoot();
      };

      // Changes swimlane orientation while collapsed
      graph.model.getStyle = function(cell)
      {
        var style = mx.mxGraphModel.prototype.getStyle.apply(this, arguments);

        if (graph.isCellCollapsed(cell))
        {
          if (style != null)
          {
            style += ';';
          }
          else
          {
            style = '';
          }

          style += 'horizontal=0;align=left;spacingLeft=14;';
        }

        return style;
      };

      // Keeps widths on collapse/expand
      var foldingHandler = function(sender, evt)
      {
        var cells = evt.getProperty('cells');

        for (var i = 0; i < cells.length; i++)
        {
          var geo = graph.model.getGeometry(cells[i]);

          if (geo.alternateBounds != null)
          {
            geo.width = geo.alternateBounds.width;
          }
        }
      };

      graph.addListener(mx.mxEvent.FOLD_CELLS, foldingHandler);
    }

    // Applies size changes to siblings and parents
    new mx.mxSwimlaneManager(graph);

    // Creates a stack depending on the orientation of the swimlane
    var layout = new mx.mxStackLayout(graph, true);

    // Makes sure all children fit into the parent swimlane
    layout.resizeParent = true;

    // Applies the size to children if parent size changes
    layout.fill = true;

    // Only update the size of swimlanes
    layout.isVertexIgnored = function(vertex)
    {
      return !graph.isSwimlane(vertex);
    }

    // Keeps the lanes and pools stacked
    var layoutMgr = new mx.mxLayoutManager(graph);



    //cell parameter : represent the container swimlane that contain the shape with following properties
    //A-parent: mxCell                 : we see that it tell us that the inner swimlane belong to another swimlane with ID = mxCell
    //B-connectable: false             : we set all the swimlanes parent and childs connectable false
    //C-style: "swimlane"              : we set the style of the vertex (container) as swimlane
    //D-mxObjectId: "mxCell#9"         : we set ID for this container as mxCell39
    //E-value: "Pool 2"                : we set the value of the container Pool 2
    //F-geometry: mxGeometry {x: 220, y: 0, width: 265, height: 640, relative: false, …} 
    //G: we set the position of container as the above with absoulte position
    //H-vertex: true                     : we see that the container tell us that his type is vertex
    //I-source: null , target: null      : we see that the conatiner not assign to source and destination shapes 
    //J-children: (2) [mxCell, mxCell] : represent the 2 inner swimlane inside that the parent swimlane contain them

    //-----------------------------------------------------------------------------------------------------------//

    //for each children properties it contain the following properties
    //A-children                       : we see that it contain all shape as inner mxCell also like the following
    //B : mxCell 
    //C-connectable: true
    //D-edges: [mxCell]     : what edges connected to that vertex 
    //E-geometry: mxGeometry {x: 40, y: 40, width: 30, height: 30, relative: false, …} : the position of each vertex
    //F-id: "20"
    //G-mxObjectId: "mxCell#24"
    //H-parent: mxCell {value: "Lane2 B", geometry: mxGeometry, style: "swimlane", id: "7", vertex: true, …}
    //I-source: null
    //J-style: "state"
    //K-target: null
    //L-value: null
    //M-vertex: true  : it tell us that the shape type is vertex type 

    //we see that edge properties is also is mxCell[] that conatin the following
    //1-edge: true                     : 
    //we see that the mxCell tell us that is type of edge
    //2-geometry: mxGeometry {x: 0, y: 0, width: 0, height: 0, relative: true}  : 
    //we see that the mxCell style
    //3-id: "31"                       : mxCell ID
    //4-mxObjectId: "mxCell#35"        : 
    //5-source: mxCell {value: null, geometry: mxGeometry, style: "state", id: "20", vertex: true, …} :
    //we see that the edge assign to vertex with id = 20
    //6-style: "arrow"                 :we see that the mxCell take the class of arrow
    //7-value: null                    :we see that the edge without value
    

    //when make drag the vertex this function is called
    layoutMgr.getLayout = function(cell)
    {
    
      //graph.getModel() : means that get all the mxCell of the whole graph
      //graph.getModel().getChildCount(cell) : means get all the children that the container have them 
      //!model.isEdge(cell) : to make sure that  the shape we are moving is not edge

      if (!model.isEdge(cell) && graph.getModel().getChildCount(cell) > 0 &&
        (model.getParent(cell) == model.getRoot() || graph.isPool(cell)))
      {
        layout.fill = graph.isPool(cell);

        return layout;
      }

      return null;
    };

    // Gets the default parent for inserting new cells. This
    // is normally the first child of the root (ie. layer 0). ==> indicate the parent swimlane
    var parent = graph.getDefaultParent();

    // Adds cells to the model in a single step
    model.beginUpdate();
    try
    {
      //-------------------------------------------------------------------------------//      

      //Swimlane Parts

      //to add first parent swimlane with name Pool 1
      var pool1 = graph.insertVertex(parent, null, 'Pool 1', 0, 0, 0, 640,'swimlane');
      pool1.setConnectable(false);
      //to add swimlane under parent swimlane withe name Pool 1
      var lane1a = graph.insertVertex(pool1, null, 'Lane1 A', 0, 0, 110, 640,'swimlane');
      lane1a.setConnectable(false);
      //to add swimlane under parent swimlane with name Pool 1
      var lane1b = graph.insertVertex(pool1, null, 'Lane1 B', 0, 0, 110, 640,'swimlane');
      lane1b.setConnectable(false);
      //to add first parent swimlane with name Pool 2
      var pool2 = graph.insertVertex(parent, null, 'Pool 2', 0, 0, 0, 640,'swimlane');
      pool2.setConnectable(false);
      //to add swimlane under parent swimlane withe name Pool 2
      var lane2a = graph.insertVertex(pool2, null, 'Lane2 A', 0, 0, 155, 640,'swimlane');
      lane2a.setConnectable(false);
      //to add swimlane under parent swimlane withe name Pool 2
      var lane2b = graph.insertVertex(pool2, null, 'Lane2 B', 0, 0, 110, 640,'swimlane');
      lane2b.setConnectable(false);

      //-------------------------------------------------------------------------------//      
      
      //Vertex Parts

      //we see that we insert vertex inside swimlane Pool1 inside swimlane with name under the Lane1 A
      var start1 = graph.insertVertex(lane1a, null, 'Start', 40, 40, 30, 30, 'state');
      var end1 = graph.insertVertex(lane1a, null, 'A', 40, 560, 30, 30, 'end');
      var step1 = graph.insertVertex(lane1a, null, 'Contact\nProvider', 15, 90, 80, 50, 'process');
      var step11 = graph.insertVertex(lane1a, null, 'Complete\nAppropriate\nRequest', 15, 190, 80, 50, 'process');
      var step111 = graph.insertVertex(lane1a, null, 'Receive and\nAcknowledge', 15, 385, 80, 50, 'process');

      //we see that we insert vertex inside swimlane Pool1 inside swimlane with name under the Lane1 b
      var step3 = graph.insertVertex(lane1b, null, 'Request 1st-\nGate\nInformation', 15, 190, 80, 50, 'process');
      var step33 = graph.insertVertex(lane1b, null, 'Receive 1st-\nGate\nInformation', 15, 290, 80, 50, 'process');
      
      //we see that we insert vertex inside swimlane Pool2 inside swimlane with name under the Lane2 A
      var step4 = graph.insertVertex(lane2a, null, 'Receive and\nAcknowledge', 20, 290, 80, 50, 'process');
      var step44 = graph.insertVertex(lane2a, null, 'Contract\nConstraints?', 35, 385, 50, 50, 'condition');
      var step444 = graph.insertVertex(lane2a, null, 'Tap for gas\ndelivery?', 35, 465, 50, 50, 'condition');
      var end2 = graph.insertVertex(lane2a, null, 'B', 45, 560, 30, 30, 'end');
      var end3 = graph.insertVertex(lane2a, null, 'C', 99, 560, 30, 30, 'end');
      
      //we see that we insert vertex inside swimlane Pool2 inside swimlane with name under the Lane2 b
      var start2 = graph.insertVertex(lane2b, null, null, 40, 40, 30, 30, 'state');
      var step2 = graph.insertVertex(lane2b, null, 'Receive\nRequest', 15, 90, 80, 50, 'process');
      var step22 = graph.insertVertex(lane2b, null, 'Refer to Tap\nSystems\nCoordinator', 15, 190, 80, 50, 'process');

      //-------------------------------------------------------------------------------//

      //Links Parts

      //we see that we insert edge that liks between vertexs inside swimland Pool1 inside swimlane with name lane1a
      graph.insertEdge(lane1a, null, null, step111, end1,'arrow');
      graph.insertEdge(lane1a, null, null, start1, step1,'arrow');
      graph.insertEdge(lane1a, null, null, step1, step11,'arrow');
      graph.insertEdge(lane1a, null, null, step11, step111,'arrow');

      //we see that we insert edge that liks between vertexs inside swimland Pool1 inside swimlane with name lane1b
      graph.insertEdge(lane1b, null, null, step3, step33,'arrow');

      //we see that we insert edge that liks between vertexs inside swimland Pool2 inside swimlane with name lane2a
      graph.insertEdge(lane2a, null, null, step4, step44,'arrow');
      graph.insertEdge(lane2a, null, 'No', step44, step444, 'arrow');
      graph.insertEdge(lane2a, null, 'Yes', step444, end2, 'arrow');
      
      //we see that we insert edge that liks between vertexs inside swimland Pool2 inside swimlane with name lane2
      graph.insertEdge(lane2b, null, null, start2, step2,'arrow');
      graph.insertEdge(lane2b, null, null, step2, step22,'arrow');
      //-----------------------------------------------------------------//
      //we see that we insert edge that links 2 different vertex in different swimlane
      graph.insertEdge(parent, null, null, step22, step3, 'crossover');
      graph.insertEdge(parent, null, 'Yes', step44, step111,'crossover');// 'verticalAlign=bottom;labelBackgroundColor=white;'
      graph.insertEdge(parent, null, null, step1, step2, 'crossover');
      graph.insertEdge(parent, null, null, step3, step11, 'crossover');
      graph.insertEdge(parent, null, null, step33, step4, 'crossover');
     
      var e = null;
      //if we want to make link between 2 vertexs as links  with dots in the Pool1 Lane1A
       e = graph.insertEdge(lane1a, null, null, step11, step33, 'crossover');
       e.geometry.points = [new mx.mxPoint(step33.geometry.x + step33.geometry.width / 2 + 20,step11.geometry.y + step11.geometry.height * 4 / 5)];
       //if we want to make link between 2 vertexs as links in the left direction in the Pool2 Lane2A
       e = graph.insertEdge(lane2a, null, 'No', step444, end3,'arrow');
       e.geometry.points = [new mx.mxPoint(end3.geometry.x + end3.geometry.width / 2,step444.geometry.y + step444.geometry.height / 2)];      
    }
    finally
    {
      //Updates the display
      model.endUpdate();
      // centerlized the graph
      graph.center();
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
