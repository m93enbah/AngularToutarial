import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';

import { mxgraph } from "mxgraph";

declare var require: any;
const mx = require('mxgraph')({
    mxImageBasePath: 'assets/mxgraph/images',
    mxBasePath: 'assets/mxgraph'
});


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    
    ngOnInit(): void {
    }

}
