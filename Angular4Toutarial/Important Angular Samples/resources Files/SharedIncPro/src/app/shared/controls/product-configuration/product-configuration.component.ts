import { Component, OnInit, Input } from '@angular/core';
import * as d3 from 'd3';
import { debug } from 'util';
import { FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'css-product-configuration',
  templateUrl: './product-configuration.component.html',
  styleUrls: ['./product-configuration.component.scss']
})
export class ProductConfigurationComponent implements OnInit {

  ProductNameButtonPressed: boolean = false;
  showProductSaveUpdate: boolean;
  productEntryForm: FormGroup;
  oCustom: customShape = new customShape();

  //Tabs State
  hideProductEntryTab: boolean = true;
  //End Tabs State

  constructor(private cs: CommonService) { }

  ngOnInit() {
    this.oCustom.createShape();
    this.initailizeShapeEvents();
    this.createForm();


    if (this.hideProductEntryTab) {
      d3.select("#productEntryTab").style("display", this.oCustom.showOrHideTab(this.hideProductEntryTab));
      this.showProductSaveUpdate = false;
    }
    else {
      d3.select("#productEntryTab").style("display", this.oCustom.showOrHideTab(this.hideProductEntryTab));
      this.showProductSaveUpdate = false;
    }

  }

  createForm() {
    this.productEntryForm = this.cs.fb.group({
      productCode: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      productName2: ['', [Validators.required]],
    });
  }

  fillProductEntry() {
  }

  saveUpdateProduct() {
  }

  initailizeShapeEvents() {
    this.initializePieShapeEvents();
    this.initializeLeftOptions();
    this.initializeRightOptions();
  }

  initializePieShapeEvents() {

    $('#MainCircle').on("click", function () {
      console.log('Product Entry Tab');
      const ocustom = new customShape();
      this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    })


    $('#inrRect_0').on("click", function () {
      console.log('Arithmetic And Logic Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    })


    $("#inrRect_1").on("click", function () {
      console.log('Premuim Rating Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#inrRect_2").on("click", function () {
      console.log('Clauses Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#inrRect_3").on("click", function () {
      console.log('Commision And Fees');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#outRect_0").on("click", function () {
      console.log('Buisness Clasees And Sub Clasess Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#outRect_1").on("click", function () {
      console.log('Treatis Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#outRect_2").on("click", function () {
      console.log('Sales Channels Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#outRect_3").on("click", function () {
      console.log('Buisness Process And Validation Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#outRect_4").on("click", function () {
      console.log('Insurance Systems Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });
  }

  initializeLeftOptions() {
    $("#DynamicChartsRect").on("click",function () {
      console.log('Dynamic Charts Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#ProAnalysisRect").on("click",function () {
      console.log('Product Analysis Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });


    $("#DynamicSummaryRect").on("click",function () {
      console.log('Dynamic Summary Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    })

    $("#EmptyRect").on("click",function () {
      console.log('Not Implement Yet');
      this.ocustom.addMinimizeClass();
    })

  }

  initializeRightOptions() {
    $("#customerListRect").on("click",function () {
      console.log('customer List Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });

    $("#simulationRect").on("click", function () {
      console.log('Simulation Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    });


    $("#productTrendRect").on("click", function () {
      console.log('product Trend Tab');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab));
    })

    $("#copyProductRect").on("click", function () {
      console.log('copy Product');
      const ocustom = new customShape();
      //this.hideProductEntryTab = false;
      ocustom.addMinimizeClass();
      //d3.select("#productEntryTab").style("display", ocustom.showOrHideTab(this.hideProductEntryTab))
    })
  }
}

class customShape {

  productName: string = "";
  productCode: string = "";

  constructor() { }

  createShape() {

    if (this.productName == null || this.productName == "") {
      this.productName = "Product Name";
    }

    var canWidth = screen.width / 2;
    var canHeight = screen.height / 2;



    var canvas = d3.select('#chart_wrap').append('svg')
      .attr('id', 'piechart')
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "0 0 " + canWidth + " " + canHeight)
      .classed("svg-content-responsive", true);

    var mainGroup = canvas.append('g').attr('transform', 'translate(' +0 + ',' +0 + ')');
    //Left And Right Menus Section Start

    //Left Options Section Start 
    var RightOptions = 4;
    var RightrectangleShape = [];

    var LeftOptions = 4;
    var LeftrectangleShape = [];

    var rectWidth = 100;

    var LeftrectHeight = canHeight / LeftOptions;
    var RightrectHeight = canHeight / RightOptions;

    var rectPosition = canWidth - rectWidth;

    LeftrectangleShape = [
      { "cx": 0, "cy": 0, "rx": 12, "ry": 12, "height": LeftrectHeight, "width": rectWidth, "color": "#66CC00", "id": "DynamicChartsRect", "legendLabel": "Dynamic \n Charts" },
      { "cx": 0, "cy": LeftrectHeight, "rx": 12, "ry": 12, "height": LeftrectHeight, "width": rectWidth, "color": "#66CC00", "id": "ProAnalysisRect", "legendLabel": "Product \n Analysis" },
      { "cx": 0, "cy": 2 * (LeftrectHeight), "rx": 12, "ry": 12, "height": LeftrectHeight, "width": rectWidth, "color": "#66CC00", "id": "DynamicSummaryRect", "legendLabel": "Dynamic \n Summary" },
      { "cx": 0, "cy": 3 * (LeftrectHeight), "rx": 12, "ry": 12, "height": LeftrectHeight, "width": rectWidth, "color": "#66CC00", "id": "EmptyRect", "legendLabel": "" }
    ];

    RightrectangleShape = [
      { "cx": rectPosition, "cy": 0, "rx": 12, "ry": 12, "height": RightrectHeight, "width": rectWidth, "color": "#66CC00", "id": "customerListRect", "legendLabel": "Customers \n List" },
      { "cx": rectPosition, "cy": RightrectHeight, "rx": 12, "ry": 12, "height": RightrectHeight, "width": rectWidth, "color": "#66CC00", "id": "simulationRect", "legendLabel": "Simulation" },
      { "cx": rectPosition, "cy": 2 * (RightrectHeight), "rx": 12, "ry": 12, "height": RightrectHeight, "width": rectWidth, "color": "#66CC00", "id": "productTrendRect", "legendLabel": "Products \n Trend" },
      { "cx": rectPosition, "cy": 3 * (RightrectHeight), "rx": 12, "ry": 12, "height": RightrectHeight, "width": rectWidth, "color": "#66CC00", "id": "copyProductRect", "legendLabel": "Copy \n  Products" }
    ];

    var RectGroups = mainGroup.append('g').attr('width', canWidth).attr('height', canHeight).attr('transform', 'translate(0,0)');

    var leftGroupRect = RectGroups.append('g').attr('width', canWidth).attr('height', canHeight).attr('transform', 'translate(0,0)');

    var leftrectGroups = leftGroupRect.selectAll('g').data(LeftrectangleShape).enter()
      .append('g')
      .attr("x", function (d) { return d.cx; })
      .attr("y", function (d) { return d.cy; });

    leftrectGroups.append("rect")
      .attr("x", function (d) { return d.cx; })
      .attr("y", function (d) { return d.cy; })
      .attr("rx", function (d) { return d.rx })
      .attr("ry", function (d) { return d.ry })
      .attr("height", function (d) { return d.height; })
      .attr("width", function (d) { return d.width; })
      .attr('stroke', 'white')
      .attr('stroke-width', 5)
      .attr('fill', '#5284CD')
      .attr('id', function (i, d) { return i.id; })
      .on('mouseover', function (d) {
        var ss = canvas.select('#' + d.id);
        ss.style('fill', '#66CC00');
      }).on('mouseout', function (d) {
        var ss = canvas.select('#' + d.id);
        ss.style('fill', '#5284CD');
      });

    var leftforg = leftrectGroups.append('foreignObject')
      .attr("y", function (d) {
        return (d.cy) + (d.height / 4);
      })
      .attr("x", function (d) {
        return d.cx;
      })
      .attr('width', function (d) { return d.width - 10; })
      .attr('height', function (d) { return d.height / 2; })
      .attr('margin-left', '5px')
      .attr('margin-right', '5px');


    var leftfordDiv = leftforg.append('xhtml:div')
      .style("text-anchor", "middle")
      .append('div')

    var leftparag = leftfordDiv.append("p");

    leftparag.selectAll("tspan")
      .data(d => d.legendLabel.split("\n"))
      .enter()
      .append("tspan")
      .attr("display", "block")
      .style('color', 'white')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .text(d => d);
    //Left Options Section End 


    //Right Options Section Start 
    var rightGroupRect = RectGroups.append('g').attr('width', canWidth).attr('height', canHeight).attr('transform', 'translate(0,0)');

    var rightrectGroups = rightGroupRect.selectAll('.g').data(RightrectangleShape).enter()
      .append('g')
      .attr("x", function (d) { return d.cx; })
      .attr("y", function (d) { return d.cy; });


    rightrectGroups.append("rect")
      .attr("x", function (d) { return d.cx; })
      .attr("y", function (d) { return d.cy; })
      .attr("rx", function (d) { return d.rx })
      .attr("ry", function (d) { return d.ry })
      .attr("height", function (d) { return d.height; })
      .attr("width", function (d) { return d.width; })
      .attr('stroke', 'white')
      .attr('stroke-width', 5)
      .attr('fill', '#5284CD')
      .attr('id', function (i, d) { return i.id; })
      .on('mouseover', function (d) {
        var ss = canvas.select('#' + d.id);
        ss.style('fill', '#66CC00');
      }).on('mouseout', function (d) {
        var ss = canvas.select('#' + d.id);
        ss.style('fill', '#5284CD');
      });

    var rightforg = rightrectGroups.append('foreignObject')
      .attr("y", function (d) {
        return (d.cy) + (d.height / 4);
      })
      .attr("x", function (d) {
        return d.cx;
      })
      .attr('width', function (d) { return d.width - 10; })
      .attr('height', function (d) { return d.height / 2; })
      .attr('margin-left', '5px')
      .attr('margin-right', '5px');


    var rightfordDiv = rightforg.append('xhtml:div')
      .style("text-anchor", "middle")
      .append('div')

    var rightparag = rightfordDiv.append("p");

    rightparag.selectAll("tspan")
      .data(d => d.legendLabel.split("\n"))
      .enter()
      .append("tspan")
      .attr("display", "block")
      .style('color', 'white')
      .text(d => d);

    //Right Options Section End 

    //Left And Right Menus Section End 

    //Outer And Inner Pie Chart And Middle Circle Section

    var cirGroup = canvas.append('g').attr('transform', 'translate(' + 0 + ',' + 0 + ')');

    //Outer Pie Chart Section Start
    var outerCurve = [20, 20, 20, 20, 20];

    var outRadius = 180;

    var outDiff = 70;

    var outerDataPie = [
      { "legendLabel": "Business  Class  and  Sub  classes", "id": "BuisClassAndSubArc", "magnitude": 20 },
      { "legendLabel": "Treaties", "id": "TreatiesArc", "magnitude": 20 },
      { "legendLabel": "Sales  Channels", "id": "SalesChannelsArc", "magnitude": 20 },
      { "legendLabel": "Business  Process and Validations", "id": "BusinessProcessAndValidationsArc", "magnitude": 20 },
      { "legendLabel": "Insurance  Systems", "id": "InsuranceSystemsArc", "magnitude": 20 }];

    var outArc = d3.arc()
      .innerRadius(outRadius - outDiff)
      .outerRadius(outRadius);

    var outPie = d3.pie().value(function (d) { return d; });

    var outGroup = cirGroup.append('g').attr('transform', 'translate(' + canWidth / 2 + ',' + canHeight / 2 + ')');

    var outArcs = outGroup.selectAll('.arc').data(outPie(outerCurve)).enter().append('g').attr('class', 'arc');

    outArcs.append('path').attr('d', outArc).attr('id', function (i, d) {
      return 'outRect_' + d;
    })
      .on('click', function (d) {
        var rotate = 360 - ((((d.startAngle + d.endAngle) / 2) / Math.PI) * 180);

        outGroup.transition()
          .attr("transform", "translate(" + canWidth / 2 + "," + canHeight / 2 + ")  rotate(" + rotate + ")").duration(1000);

        outerText.transition()
          .attr("transform", function (dd) {
            return "translate(" + outerlabel.centroid(dd) + ")  rotate(" + -rotate + ")";
          })
          .duration(1000);

      })
      .on('mouseover', function (d) {
        var ss = outGroup.select('#outRect_' + d.index);
        ss.style('fill', '#66CC00');
        debugger;
      }).on('mouseout', function (d) {
        var ss = outGroup.select('#outRect_' + d.index);
        ss.style('fill', '#5284CD');
      }).on('mousemove', function (d) {
      })
      .style('fill', '#5284CD')
      .attr('stroke', 'white')
      .attr('stroke-width', 10)
      .append('title').text(function (d, i) {
      return outerDataPie[i].legendLabel;
    });

    var outerText = outArcs.append("text")
      .attr("x", function (d) {
        // let angle = ((d.startAngle+d.endAngle )/2*180)/ Math.PI;
        // // let x = (angle * outRadius) /2
        // //let x = Math.sin(angle) * hyp;
        return 120;
      })
      .attr("dy", outDiff / 2)
      .append("textPath")
      .style("text-anchor", "middle")
      .attr('fill', 'white')
      .attr('font-size', '12')
      //.attr('font-size', '8px')
      .style('font-family', 'Helvetica')
      .attr('font-weight', '700')
      .attr('fill-opacity', 2)
      .attr("xlink:href", function (d, i) {
        return "#outRect_" + i;
      })
      .text(function (d, i) {
        return outerDataPie[i].legendLabel;
      }

      ).attr("font-family", "Arial");

    var outerlabel = d3.arc()
      .outerRadius(outRadius)
      .innerRadius(outRadius);

    //Outer Pie Chart Section  End

    //Inner Pie Chart Section Start
    var innerCurve = [25, 25, 25, 25];

    var inrRadius = 120;

    var intDiff = 60;

    var innerDataPie = [
      { "legendLabel": "Arithmetic  &  Logic  Rules", "magnitude": 25 },
      { "legendLabel": "Premium  and  Rating", "magnitude": 25 },
      { "legendLabel": "Clouses ", "magnitude": 25 },
      { "legendLabel": "Commision  And  Fess ", "magnitude": 25 }];

    var inrArc = d3.arc()
      .innerRadius(inrRadius - intDiff)
      .outerRadius(inrRadius);

    var innerGroup = cirGroup.append('g').attr('transform', 'translate(' + canWidth / 2 + ',' + canHeight / 2 + ')');

    var inrPie = d3.pie().value(function (d) { return d; })

    var inrArcs = innerGroup.selectAll('.arc').data(inrPie(innerCurve)).enter().append('g').attr('class', 'arc');

    inrArcs.append('path').attr('d', inrArc).attr('id', function (i, d) { return 'inrRect_' + d })
      .on('click', function (d) {
        var rotate = 360 - (d.startAngle + d.endAngle) / 2 / Math.PI * 180;
        innerGroup.transition()
          .attr("transform", "translate(" + canWidth / 2 + "," + canHeight / 2 + ") rotate(" + rotate + ")")
          .duration(1000);

        innerText.transition()
          .attr("transform", function (dd) {
            return "translate(" + innerLabel.centroid(dd) + ") rotate(" + (-rotate) + ")";
          })
          .duration(1000);
      }).on('mouseover', function (d) {
        var ss = innerGroup.select('#inrRect_' + d.index);
        ss.style('fill', '#61E31C');
      }).on('mouseout', function (d) {
        var ss = innerGroup.select('#inrRect_' + d.index);
        ss.style('fill', '#77A1DE');
      })
      .style('fill', '#77A1DE')
      .attr('stroke', 'white')
      .attr('stroke-width', 10)
      .append('title').text(function (d, i) {
        return innerDataPie[i].legendLabel;
      });


    var innerText = inrArcs.append("text")
      .attr("text-anchor", "middle")
      .attr("clip-path", function (d) { return "url(" + "#inrRect_" + d.index + ")"; })
      //how to calc values below _dynamically_ (depending on d) so that text will be centered vertically and horizontally along the arc?
      .attr("x", 90)
      .attr("dy", intDiff / 2)
      .append("textPath")
      .attr('fill', 'white')
      .attr('font-size', '12px')
      .attr('font-weight', 'bold')
      .attr("xlink:href", function (d, i) {
        return "#inrRect_" + i;
      })
      .text(function (d, i) { return innerDataPie[i].legendLabel; }); //get the label from our original data array

    var innerLabel = d3.arc()
      .outerRadius(inrRadius)
      .innerRadius(inrRadius);

    //Inner Pie Chart Section End


    //Middle Circle Section Start

    var middleCircle = cirGroup.append('g').attr('transform', 'translate(' + canWidth / 2 + ',' + canHeight / 2 + ')');
    middleCircle.append('circle').attr('cx', 0).attr('cy', 0)
      .attr('r', 70).attr('fill', '#77A1DE').attr('stroke', 'white').attr('stroke-width', 10).attr('id', "MainCircle").on('mouseover', function (d) {
        var ss = canvas.select('#MainCircle');
        ss.style('fill', '#61E31C');
      }).on('mouseout', function (d) {
        var ss = canvas.select('#MainCircle');
        ss.style('fill', '#77A1DE');
      });
    middleCircle.append('text').attr("text-anchor", "middle")
      .attr("x", 0)
      .attr("dy", 0)
      .attr('fill', 'white')
      .attr('font-weight', 'bold')
      .attr('font-size', '12px')
      .text(this.productName);

    //Middle Circle Section End

    //Outer And Inner Pie Chart And Middle Circle Section 
  }

  addMinimizeClass() {
    $("#chart_wrap").animate(
      {
        'max-width': '720',
        'font-weight': 'bold'
      }
      , { duration: 1000 });

    d3.selectAll('tspan').style('font-weight', 'bold');
  }

  showOrHideTab(showTabState: boolean): string {
    const tabState = showTabState ? "none" : "block";
    return tabState;
  }


}





