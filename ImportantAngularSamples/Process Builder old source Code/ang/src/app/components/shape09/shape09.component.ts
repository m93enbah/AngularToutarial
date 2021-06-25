


import { mxgraph } from "mxgraph";
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

declare var require: any;
const mx = require('mxgraph')({
	mxImageBasePath: 'assets/mxgraph/images',
	mxBasePath: 'assets/mxgraph'
});



@Component({
  selector: 'app-shape09',
  templateUrl: './shape09.component.html',
  styleUrls: ['./shape09.component.css']
})
export class Shape09Component implements AfterViewInit {

	//@ViewChild('graphContainer') container: ElementRef;


	constructor() { }

	ngAfterViewInit(): void {


		// from the onLoad event handler of the document (see below).

		// Checks if the browser is supported
		if (!mx.mxClient.isBrowserSupported()) {
			// Displays an error message if the browser is not supported.
			mx.mxUtils.error('Browser is not supported!', 200, false);
		}
		else {
			debugger;

			var container = document.createElement('div');
			container.style.overflow = 'hidden';
			container.style.position = 'relative';
			container.style.width = '321px';
			container.style.height = '241px';
		//	container.style.background = '../assets/img01.png';
			container.style.cursor = 'default';

			// Enables guides
			mx.mxGraphHandler.prototype.guidesEnabled = true;

			// Alt disables guides
			mx.mxGuide.prototype.isEnabledForEvent = function (evt) {
				return !mx.mxEvent.isAltDown(evt);
			};

			// Enables snapping waypoints to terminals
			mx.mxEdgeHandler.prototype.snapToTerminals = true;

			var graphs = [];

			// Creates the graph inside the given container
			for (var i = 0; i < 2; i++) {

				var graph = new mx.mxGraph(container);
				graph.gridSize = 30;

				// Uncomment the following if you want the container
				// to fit the size of the graph
				//graph.setResizeContainer(true);

				// Enables rubberband selection
				new mx.mxRubberband(graph);

				// Gets the default parent for inserting new cells. This
				// is normally the first child of the root (ie. layer 0).
				var parent = graph.getDefaultParent();

				debugger;

				// Adds cells to the model in a single step
				graph.getModel().beginUpdate();
				try {
					var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30);
					var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30);
					var e1 = graph.insertEdge(parent, null, '', v1, v2);
				}
				finally {
					// Updates the display
					graph.getModel().endUpdate();
				}

				graphs.push(graph);
			}

			// Returns the graph under the mouse
			var graphF = function (evt) {
				var x = mx.mxEvent.getClientX(evt);
				var y = mx.mxEvent.getClientY(evt);
				var elt = document.elementFromPoint(x, y);

				for (var i = 0; i < graphs.length; i++) {
					if (mx.mxUtils.isAncestorNode(graphs[i].container, elt)) {
						return graphs[i];
					}
				}

				return null;
			};

			// Inserts a cell at the given location
			var funct = function (graph, evt, target, x, y) {
				var cell = new mx.mxCell('Test', new mx.mxGeometry(0, 0, 120, 40));
				cell.vertex = true;
				var cells = graph.importCells([cell], x, y, target);
				if (cells != null && cells.length > 0) {
					graph.scrollCellToVisible(cells[0]);
					graph.setSelectionCells(cells);
				}
			};

			// Creates a DOM node that acts as the drag source
			var img = mx.mxUtils.createImage('../assets/img01.png');
			img.style.width = '48px';
			img.style.height = '48px';
			document.body.appendChild(img);

			// Disables built-in DnD in IE (this is needed for cross-frame DnD, see below)
			// if (mx.mxClient.IS_IE)
			// {
			// 	mx.mxEvent.addListener(img, 'dragstart', function(evt)
			// 	{
			// 		evt.returnValue = false;
			// 	});
			// }

			// Creates the element that is being for the actual preview.
			var dragElt = document.createElement('div');
			dragElt.style.border = 'dashed black 1px';
			dragElt.style.width = '120px';
			dragElt.style.height = '40px';

			// Drag source is configured to use dragElt for preview and as drag icon
			// if scalePreview (last) argument is true. Dx and dy are null to force
			// the use of the defaults. Note that dx and dy are only used for the
			// drag icon but not for the preview.
			var ds = mx.mxUtils.makeDraggable(img, graphF, funct, dragElt, null, null, graph.autoscroll, true);

			// Redirects feature to global switch. Note that this feature should only be used
			// if the the x and y arguments are used in funct to insert the cell.
			ds.isGuidesEnabled = function () {
				return graph.graphHandler.guidesEnabled;
			};

			// Restores original drag icon while outside of graph
			ds.createDragElement = mx.mxDragSource.prototype.createDragElement;
		}
	};

	// NOTE: To enable cross-document DnD (eg. between frames),
	// the following methods need to be overridden:
	/*mxDragSourceMouseUp = mxDragSource.prototype.mouseUp;
	mxDragSource.prototype.mouseUp = function(evt)
	{
		var doc = this.element.ownerDocument;
		
		if (doc != document)
		{
			var mu = (mxClient.IS_TOUCH) ? 'touchend' : 'mouseup';
			
			if (this.mouseUpHandler != null)
			{
				mxEvent.removeListener(doc, mu, this.mouseUpHandler);
			}
		}
		
		mxDragSourceMouseUp.apply(this, arguments);
	};*/

	/*mxDragSourceMouseDown = mxDragSource.prototype.mouseDown;
	mxDragSource.prototype.mouseDown = function(evt)
	{
		if (this.enabled && !mxEvent.isConsumed(evt))
		{
			mxDragSourceMouseDown.apply(this, arguments);
			var doc = this.element.ownerDocument;
			
			if (doc != document)
			{
				var mu = (mxClient.IS_TOUCH) ? 'touchend' : 'mouseup';
				mxEvent.addListener(doc, mu, this.mouseUpHandler);
			}
		}
	};*/



}
