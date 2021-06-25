import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { ConfigurationService } from '../services/configuration.service';

@Component({
  selector: 'shc-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  isConfig = true;
  dataSource: string = 'database';
  apiTypes: SelectItem[];
  authTypes: SelectItem[];

  databaseForm: FormGroup;
  apiForm: FormGroup;
  isDBCard: boolean = true;
  constructor(private fb: FormBuilder, private configService: ConfigurationService) { }

  ngOnInit() {
    this.initApiForm();
    this.initDatabaseForm();
    this.apiTypes = this.configService.getApiTypes();
    this.authTypes = this.configService.getAuthTypes();
  }

  initApiForm() {
    this.apiForm = this.fb.group({
      dataSource: [{ value: 'Api', disabled: true}],
      url: [''],
      type: [''],
      authentication: [''],
      apiName: [''],
      module: ['']
    });
  }

  initDatabaseForm() {
    this.databaseForm = this.fb.group({
      dataSource: [{ value: '', disabled: true }],
      title: [''],
      hostname: [''],
      port: [''],
      serviceName: [''],
      username: [''],
      password: ['']
    });
  }

  showConfig() {
    this.isConfig = true;
  }

  showDatabaseForm(cardNum: number) {
    console.log(cardNum);
    this.isDBCard = false;
    switch (cardNum) {
      case 0: //oracle
        this.databaseForm.patchValue({
          dataSource: 'Oracle'
        });
        break;
      case 1: // mongoDb
        this.databaseForm.patchValue({
          dataSource: 'MongoDb Beta'
        });
        break;
      case 2: // mysql
        this.databaseForm.patchValue({
          dataSource: 'MySql Enterprise Edition'
        });
        break;
      case 3: // postgresql
        this.databaseForm.patchValue({
          dataSource: 'PostgreSQL'
        });
        break;
    }
  }

  onAPIFromSubmit(value: any) {
    console.log(value);
  }

  onDBFormSubmit(value: any) {
    console.log(value);
  }

  backToCard() {
    this.isDBCard = true;
  }
}



