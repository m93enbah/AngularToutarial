import { Component, OnInit } from '@angular/core';
import { Process } from '../../models/process';
import { ProcessService } from 'src/app/services/process.service';
import { CommonService } from 'src/app/services/common.service';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-definition',
  templateUrl: './process-definition.component.html',
  styleUrls: ['./process-definition.component.css']
})
export class ProcessDefinitionComponent implements OnInit {


  display = 'none'; //default Variable
  form: FormGroup;
  dialogTitle: string = "Process Properities";
  showProcessSaveOrUpdate:boolean = false;

  process: Process[];
  procSelected: Process = new Process();
  constructor(private procService: ProcessService, private cs: CommonService,private _router:Router) { }

  ngOnInit() {
    debugger;
    this.loadAllProcess();
    this.createProcessForm();
  }

  loadAllProcess() {
    this.procService.LoadAllProcess().subscribe(Data => {
      this.process = Data;
    });
  }

  HideSearchPanel() {
    this.resetForm();
  }

  resetForm() {
    this.cs.resetForm(this.form);
    this.createProcessForm();
  }

  createProcessForm() {
    this.form = this.cs.fb.group({
      Name: ['', [Validators.required]],
      Desc: ['', [Validators.required]]
    });
  }

  onSubmit() {
    debugger;
    this.mapProcessModel();
    if(this.procSelected.Id > 0)
    {
      this.procService.putProcess(this.procSelected).subscribe(
        data => {
          this.loadAllProcess();
        },
        err => {
          console.log(err);
        }
      )
    }
    else
    {
      this.procService.postProcess(this.procSelected).subscribe(
        data => {
          this.loadAllProcess();
        },
        err => {
          console.log(err);
        }
      )
    }
    this.closeModalDialog();
    this.procSelected = new Process(); 
  }

  mapProcessModel() {
    this.procSelected.Name = this.form.value.Name;
    this.procSelected.Desc = this.form.value.Desc
  }

  EditProcess(Id) {
    this.showProcessSaveOrUpdate = true;
    this.openModalDialog();
    this.procService.LoadProcessByID(Id).subscribe(
      data => {
        this.procSelected = data;
        this.form.patchValue({
          Name: this.procSelected.Name,
          Desc: this.procSelected.Desc
        });
      },
      err => {
        console.log(err);
      }
    )
  }

  ADDProcess()
  {
    this.openModalDialog();
    this.showProcessSaveOrUpdate = false;
    this.procSelected = new Process();
  }

  openModalDialog() {
    this.display = 'block'; //Set block css
    this.resetForm();
  }

  closeModalDialog() {
    this.display = 'none'; //set none css after close dialog
    this.resetForm();
  }

  DeleteProcess(id)
  {
    this.procService.DeleteProcess(id).subscribe(
      data => {
        this.loadAllProcess();
      },
      err => {
        console.log(err);
      }
    )
  }

  ShowDetails(id)
  {
    debugger;
    this._router.navigate(["processDesigner/"+id]);
  }

}
