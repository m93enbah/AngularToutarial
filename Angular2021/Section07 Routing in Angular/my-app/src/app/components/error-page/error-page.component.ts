import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage:string = "";
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this used to recieve static data in the routing defined
    this.route.data.subscribe((params) => {
      this.errorMessage = params["message"];
    })
  }

}
