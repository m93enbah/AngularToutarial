import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';

import { mxgraph } from "mxgraph";

declare var require: any;
const mx = require('mxgraph')({
  mxImageBasePath: 'assets/mxgraph/images',
  mxBasePath: 'assets/mxgraph'
});

@Component({
  selector: 'app-shape07',
  templateUrl: './shape07.component.html',
  styleUrls: ['./shape07.component.css']
})
export class Shape07Component implements AfterViewInit {

  @ViewChild('graphContainer') container: ElementRef;


  ngAfterViewInit():void{

debugger;
   
      // Disables the built-in context menu
      mx.mxEvent.disableContextMenu(this.container.nativeElement);
      
      // Creates the graph inside the given container
      var graph = new mx.mxGraph(this.container.nativeElement);
      // Enables rubberband selection
      new mx.mxRubberband(graph);
      mx.mxEvent.addListener(this.container.nativeElement, 'dragover', function(evt)
      {
        if (graph.isEnabled())
        {
          evt.stopPropagation();
          evt.preventDefault();
        }
      });
      
      mx.mxEvent.addListener(this.container.nativeElement, 'drop', function(evt)
      {
        if (graph.isEnabled())
        {
          evt.stopPropagation();
          evt.preventDefault();
          // Gets drop location point for vertex
          var pt = mx.mxUtils.convertPoint(graph.container, mx.mxEvent.getClientX(evt), mx.mxEvent.getClientY(evt));
          var tr = graph.view.translate;
          var scale = graph.view.scale;
          var x = pt.x / scale - tr.x;
          var y = pt.y / scale - tr.y;
          
          // Converts local images to data urls
          var filesArray = mx.event.dataTransfer.files;
          
                  for (var i = 0; i < filesArray.length; i++)
                  {
              handleDrop(graph, filesArray[i], x + i * 10, y + i * 10);
                  }
        }
      });
    }
  }

  // Handles each file as a separate insert for simplicity.
  // Use barrier to handle multiple files as a single insert.
function handleDrop(graph, file, x, y) {
  if (file.type.substring(0, 5) == 'image') {
    var reader = new FileReader();
    reader.onload = function (e) {
      // Gets size of image for vertex
      var data = mx.e.target.result;
      // SVG needs special handling to add viewbox if missing and
      // find initial size from SVG attributes (only for IE11)
      if (file.type.substring(0, 9) == 'image/svg') {
        var comma = data.indexOf(',');
        var svgText = atob(data.substring(comma + 1));
        var root = mx.mxUtils.parseXml(svgText);

        // Parses SVG to find width and height
        if (root != null) {
          var svgs = root.getElementsByTagName('svg');

          if (svgs.length > 0) {
            var svgRoot = svgs[0];
            var w = parseFloat(svgRoot.getAttribute('width'));
            var h = parseFloat(svgRoot.getAttribute('height'));

            // Check if viewBox attribute already exists
            var vb = svgRoot.getAttribute('viewBox');

            if (vb == null || vb.length == 0) {
              svgRoot.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
            }
            // Uses width and height from viewbox for
            // missing width and height attributes
            else if (isNaN(w) || isNaN(h)) {
              var tokens = vb.split(' ');

              if (tokens.length > 3) {
                w = parseFloat(tokens[2]);
                h = parseFloat(tokens[3]);
              }
            }

            w = Math.max(1, Math.round(w));
            h = Math.max(1, Math.round(h));

            data = 'data:image/svg+xml,' + btoa(mx.mxUtils.getXml(svgs[0], '\n'));
            graph.insertVertex(null, null, '', x, y, w, h, 'shape=image;image=' + data + ';');
          }
        }
      }
      else {
        var img = new Image();

        img.onload = function () {
          var w = Math.max(1, img.width);
          var h = Math.max(1, img.height);

          // Converts format of data url to cell style value for use in vertex
          var semi = data.indexOf(';');

          if (semi > 0) {
            data = data.substring(0, semi) + data.substring(data.indexOf(',', semi + 1));
          }
          graph.insertVertex(null, null, '', x, y, w, h, 'shape=image;image=' + data + ';');
        };

        img.src = data;
      }
    };

    reader.readAsDataURL(file);
  }
};