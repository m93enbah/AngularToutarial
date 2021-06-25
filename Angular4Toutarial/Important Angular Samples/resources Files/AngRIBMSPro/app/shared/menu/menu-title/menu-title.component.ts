import { Component,Input} from '@angular/core';
import {ActivatedRoute}  from '@angular/router';

@Component({
  selector: 'ribms-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.scss']
})
export class MenuTitleComponent {

  @Input('pageTitle') Title: string;
}
