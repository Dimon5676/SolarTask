import { Injectable } from '@angular/core';
import { Task } from './task.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  formData: Task = {
    id: null,
    title: null,
    description: null,
    deadLine: null
  };

  readonly rootURL = 'http://localhost:5000/api';
  list: Task[];

  constructor(private http: HttpClient) { }

  postTask(): Observable<any> {
    return this.http.post(this.rootURL + '/Task', this.formData);
  }
  putTask(): Observable<any> {
    return this.http.put(this.rootURL + '/Task/' + this.formData.id, this.formData);
  }
  deleteTask(id): Observable<any> {
    return this.http.delete(this.rootURL + '/Task/' + id);
  }

  refreshList(): void {
    this.http.get(this.rootURL + '/Task')
      .toPromise()
      .then(res => this.list = res as Task[]);
  }
}
