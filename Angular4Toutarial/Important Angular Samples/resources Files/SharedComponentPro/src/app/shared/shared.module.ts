import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FileUploadModule } from 'primeng/fileupload';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AccordionModule} from 'primeng/accordion';
import {PanelModule} from 'primeng/panel';
import {FieldsetModule} from 'primeng/fieldset';
import {
  DataTableModule,
  CalendarModule,  DropdownModule,
  MultiSelectModule,  DragDropModule, EditorModule, ConfirmDialogModule,


} from "primeng/primeng";
import {ToastModule} from 'primeng/toast';

import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';

import{SharedModule as primeSharedModule} from "primeng/primeng";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OptionsDialogComponent } from './controls/options-dialog/options-dialog.component';
import { DatatableComponent } from './controls/datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';
import { IconPickerModule } from 'ngx-icon-picker/dist/index';

import { CommonService } from './services/common.service';


import {MessageService} from 'primeng/api';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [OptionsDialogComponent, DatatableComponent],
  imports: [

    CommonModule,
    TableModule,
    RadioButtonModule,
    CheckboxModule,
    DialogModule,
    SelectButtonModule,
    TriStateCheckboxModule,
    InputSwitchModule,
    FileUploadModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    DragDropModule,
    EditorModule,
    ReactiveFormsModule,
    primeSharedModule,
    FormsModule,
    HttpClientModule,
    IconPickerModule,
    AutoCompleteModule,
    AccordionModule,
    PanelModule,
    FieldsetModule,
    ToastModule,
    ConfirmDialogModule,
     MessagesModule,
    MessageModule,
    CardModule,
    TabViewModule
  ],
  exports:[
    CommonModule,
    TableModule,
    RadioButtonModule,
    CheckboxModule,
    DialogModule,
    SelectButtonModule,
    TriStateCheckboxModule,
    InputSwitchModule,
    FileUploadModule,
    DataTableModule,
    CalendarModule,
    DropdownModule,
    MultiSelectModule,
    DragDropModule,
    EditorModule,
    ReactiveFormsModule,
    OptionsDialogComponent,
    FormsModule,
    HttpClientModule,
    IconPickerModule,
    AutoCompleteModule,
    AccordionModule,
    PanelModule,
    FieldsetModule,
    ToastModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    CardModule,
    TabViewModule
  ],
  providers: [MessageService,CommonService ]
})
export class SharedModule { }
