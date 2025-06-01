import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegularVolunteer } from '../models/regular-volunteer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  private api = 'http://d3v.ninja:8080/hacktm/'; 

  setTasks(tasks: Task[]): void {
    this.tasksSubject.next(tasks);
  }

  getTasks(): Task[] {
    return this.tasksSubject.getValue();
  }

  constructor(private http: HttpClient) {
  }

  fetchTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.api}/task/getAll`);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.api}/task/create`, task);
  }
}
