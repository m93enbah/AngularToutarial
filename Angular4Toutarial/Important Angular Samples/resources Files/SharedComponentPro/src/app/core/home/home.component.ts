import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';



@Component({
  selector: 'shc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiValues = [];
  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {



  }


  ngOnInit() {
    let getUrl = '/api/Values';

    let httpHeaders = new HttpHeaders().set('Accept', 'application/json');

    this.http.get<any>(getUrl, { headers: httpHeaders, responseType: 'json' }).subscribe(
      data => {
        this.apiValues = data;
        console.log(this.apiValues);
      }
    )
      ;
  }

}
