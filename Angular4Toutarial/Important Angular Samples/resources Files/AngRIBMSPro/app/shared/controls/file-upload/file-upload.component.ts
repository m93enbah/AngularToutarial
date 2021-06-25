import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { FileUpload } from 'primeng/primeng';
import 'rxjs/Rx';

@Component({
  selector: 'ribms-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input() files: File[];
  file: File;
  formData = new FormData();
  constructor(private cs: CommonService) { }

  ngOnInit() {
  }

  @Input() multiple: string;
  @Input() customUpload: boolean;
  @Input() mode: string;
  @Input() colsAttachments: any[];
  @Input() rowsAttachments: any[];

  @Output() uploadHandler = new EventEmitter();
  @Output() OnCheckboxSelectedAttachments = new EventEmitter();
  @Output() OnDeleteAttachments = new EventEmitter();
  show: boolean = false;
  loading: boolean = false;

  @ViewChild('fileUploader') fileUploader: FileUpload;

  UploadHandler(event: any) {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    this.files = event.files;
    if (this.files.length > 0) {

      this.formData.set("files", "", "");

      Array.from(this.files).forEach(file => {
        this.formData.append("files", file, file.name);
      });

      this.cs.uploadFiles(this.formData).subscribe(
        data => {
          this.cs.pushMessage("success", "Success", "File(s) Uploaded Successfully");
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
          this.uploadHandler.emit(data);
        },
        err => {
          console.log(err);
          this.cs.pushError(err);
          this.loading = false;
          this.cs.showOrHideSpinner(this.loading);
        }
      );
    }
  }

  OnLinkSelected(event: any) {
    this.loading = true;
    this.cs.showOrHideSpinner(this.loading);
    this.cs.downloadFile(event.commandRow.AttachmentPath).subscribe(
      data => {
        this.downloadFile(data);
        this.cs.pushMessage("success", "Success", "File Downloaded Successfully");
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
      },
      err => {
        console.log(err);
        this.loading = false;
        this.cs.showOrHideSpinner(this.loading);
        this.cs.pushError(err);
      });
  }

  downloadFile(data: any) {
    const blob = new Blob([data], { type: data.type });
    const url = window.URL.createObjectURL(blob);

    var a = document.createElement('a');
    a.href = url;
    a.download = url.substr(url.lastIndexOf('/') + 1);
    a.click();
  }

  OnCheckboxSelected(selectedRows: any[]) {
    this.OnCheckboxSelectedAttachments.emit(selectedRows);
  }    

  onDeleteAttachments() {
    this.OnDeleteAttachments.emit();
  }

  showAttachmentFiles() {
    this.show = true;
  }

  clearFileUploader() {
    this.fileUploader.clear();
  }
}
