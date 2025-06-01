import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { TaskCreate } from '../task-create/task-create';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { TaskService } from '../services/task';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-tasks',
  imports: [MatButtonModule, MatTableModule, MatIconModule, MatSortModule, MatSort, MatTooltipModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks implements AfterViewInit {
  constructor(private dialog: MatDialog, private taskService: TaskService) {
  }
  displayedColumns = ['taskName', 'actions'];

  tasks = [
    { taskId: 1, taskName: 'Clean brushes' },
    { taskId: 2, taskName: 'Prepare scaffolding' },
    { taskId: 3, taskName: 'Paint main entrance' }
  ];

  dataSource!: MatTableDataSource<any>;
  ngOnInit(){
    this.taskService.setTasks(this.tasks);
    this.dataSource = new MatTableDataSource(this.tasks);
  }
  
    @ViewChild(MatSort) sort!: MatSort;
  
    ngAfterViewInit() {
      this.dataSource.sort = this.sort;
  }

  editTask(task: any): void {
    const dialogRef = this.dialog.open(TaskCreate, {
    width: '400px',
    data: {
      mode: 'edit',
      taskName: task.taskName,
      existingNames: this.tasks
        .filter(t => t.taskId !== task.taskId) // exclude current task
        .map(t => t.taskName.toLowerCase())
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // Update the task's name
      task.taskName = result;
      this.dataSource.data = [...this.tasks]; // refresh table
    }
  });
  }

  deleteTask(task: any): void {
    const dialogRef = this.dialog.open(ConfirmDialog);

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.tasks = this.tasks.filter(t => t.taskId !== task.taskId);
      this.dataSource.data = [...this.tasks];
    }
  });
  }

  createTask(): void {
  const dialogRef = this.dialog.open(TaskCreate, {
    width: '400px',
    data: {
      existingNames: this.tasks.map(task => task.taskName.toLowerCase())
    }  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.tasks.push({taskId: Date.now(), taskName: result});
      this.dataSource.data = [...this.tasks]; // refresh table
    }
  });

  }


}
