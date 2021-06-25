
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { ControlFileUpload } from '../control-models/control-fileupload';



@Component({

  selector: 'shc-file-upload',

  templateUrl: './file-upload.component.html',

  styleUrls: ['./file-upload.component.css']

})

export class FileUploadComponent implements OnInit {

  @Input() control: ControlFileUpload;

  @Input() form: FormGroup;

  uploadedFiles: any[] = [];

  constructor() { }



  ngOnInit() {

    this.form.addControl(this.control.key, new FormControl('File'));

  }



  onUpload(event) {
    for (const file of event.files) {

      this.uploadedFiles = [...this.uploadedFiles, file];

    }
    this.form.get(this.control.key).patchValue(this.uploadedFiles);



  }

  onFileChanged(event) {
  }

  onFileSelect(event) {
    this.getControls(event.files);

  }



  onRemoveFile(event: any) {

    let tempFiles = this.uploadedFiles.slice();
    let index = tempFiles.indexOf(event.file);
    if (index > -1) {
      tempFiles.splice(index, 1);
    }
    this.getControls(tempFiles);
  }



  getControls(files: any) {
    let controlName = ""

    for (const file of files) {

      controlName += file.name;
      this.uploadedFiles = [...this.uploadedFiles, file];

    }

    this.form.get(this.control.key).patchValue(controlName);

  }

  clearFiles(event: any) {
    this.form.get(this.control.key).patchValue("");
  }





}

