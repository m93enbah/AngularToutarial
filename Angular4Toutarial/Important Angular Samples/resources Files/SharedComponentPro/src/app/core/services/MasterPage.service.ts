import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MasterPageService {

  sideDarkSkin = new EventEmitter<boolean>();
  headerColorEmitter = new EventEmitter<string>();
  bodyColorEmitter = new EventEmitter<string>();
  sideColorEmitter = new EventEmitter<string>();
  snavToggleEmitter = new EventEmitter<boolean>();
  todoListEmitter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

}



