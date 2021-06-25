import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, Injectable, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar, MatButton } from '@angular/material';
import { MasterPageService } from '../../../../services/MasterPage.service';

export interface ToDoItem {
  id: number;
  name: string;
  completed: boolean;
}

@Injectable()

  @Component({
    selector: 'css-to-do-list',
    templateUrl: './to-do-list.component.html',
    styleUrls: ['./to-do-list.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
  })


export class ToDoListComponent implements OnInit {
  @Input('taskList') private tasks: ToDoItem[];
  @Output('updateTask') private updateTask: EventEmitter<ToDoItem[]> = new EventEmitter<ToDoItem[]>();
  @ViewChild('toDoList') toolsSettings: ElementRef;
  @ViewChild('toDoListBtn') toDoListBtn: MatButton;
  listBtnShow = true;

  private newTask = new FormControl('', [Validators.required]);
  private blankPlacholder = '';
  private snackBarDuration = 2000;
  private getErrorMessage() {
    return this.newTask.hasError('required') ? 'You must enter a task' : '';
  }

  constructor(private snackBar: MatSnackBar, private MasterPageService: MasterPageService) { }

  ngOnInit() {
    if (this.tasks === undefined || this.tasks == null) {
      this.tasks = [];
    }
    this.MasterPageService.todoListEmitter.subscribe((data) => {
      this.listActiveHandler();
    });
  }

  private addTask(taskName) {
    if (taskName !== '') {
      const taskId = this.tasks.length + 1;
      this.tasks.push({ id: taskId, name: taskName, completed: false });
      this.snackBar.open(taskName + ' is added to list!', '', {
        duration: this.snackBarDuration
      });
      this.updateTask.emit(this.tasks);
      return false;
    }
  }

  private removeTask(taskName) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (taskName === this.tasks[i].name) {
        this.tasks.splice(i, 1);
      }
    }
    this.snackBar.open(taskName + ' is removed from list!', '', {
      duration: this.snackBarDuration
    });
    this.updateTask.emit(this.tasks);
    return false;
  }

  private changeStatus(task: ToDoItem) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (task.id === this.tasks[i].id) {
        this.tasks[i].completed = task.completed;
      }
    }
    this.snackBar.open('Status of ' + task.name + ' is changed!', '', {
      duration: this.snackBarDuration
    });
    this.updateTask.emit(this.tasks);
    return false;
  }

  private getIncompleteTask() {
    let taskCompleted = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed) {
        taskCompleted++;
      }
    }
    return taskCompleted;
  }

  public getToDoList() {
    const completedTasks = this.tasks.filter(task => task.completed === true);
    const inCompletedTasks = this.tasks.filter(task => task.completed === true);
    return { tasks: this.tasks, completedTasks: completedTasks, inCompletedTasks: inCompletedTasks };
  }

  listActiveHandler() {
    this.toolsSettings.nativeElement.classList.toggle('active');
    this.toDoListBtn._elementRef.nativeElement.classList.toggle('active');
    this.listBtnShow = !this.listBtnShow;
  }
}
