import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../shared/task.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public service: TaskService;

  constructor(service: TaskService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form != null) {
      form.form.reset();
    }
    this.service.formData = {
      id: 0,
      title: '',
      description: '',
      deadLine: ''
    };
  }

  onSubmit(form: NgForm): void {
    if (this.service.formData.id === 0) {
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm): void {
    this.service.postTask().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm): void {
    this.service.putTask().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
      },
      err => {
        console.log(err);
      }
    );
  }

}
