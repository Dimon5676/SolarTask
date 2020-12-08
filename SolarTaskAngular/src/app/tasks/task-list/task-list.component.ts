import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/task.service';
import { Task } from '../../shared/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public service: TaskService;

  constructor(service: TaskService) {
    this.service = service;
  }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(task: Task): void {
    this.service.formData = Object.assign({}, task);
  }

  onDelete(id): void {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteTask(id)
        .subscribe(res => {
            this.service.refreshList();
          },
          err => {
            console.log(err);
          });
    }
  }

}
