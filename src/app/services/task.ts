import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$: Observable<Task[]> = this.tasksSubject.asObservable();

  setTasks(tasks: Task[]): void {
    this.tasksSubject.next(tasks);
  }

  getTasks(): Task[] {
    return this.tasksSubject.getValue();
  }
  constructor() { 
    this.setTasks([
  { taskId: 1, taskName: 'Clean brushes' },
  { taskId: 2, taskName: 'Prepare scaffolding' },
  { taskId: 3, taskName: 'Paint main entrance' }]);
  }
}
