import { Component, Inject, NgModule } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatError } from '@angular/material/form-field';

@Component({
  selector: 'app-task-create',
  imports: [MatDialogModule, CommonModule, MatFormFieldModule, MatButtonModule, FormsModule, MatInputModule, MatError],
  templateUrl: './task-create.html',
  styleUrl: './task-create.scss'
})
export class TaskCreate {
  taskName: string = '';
  mode: 'create' | 'edit' = 'create'; 
  existingNames: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<TaskCreate>,
    @Inject(MAT_DIALOG_DATA) public tasks: any // data can be used for editing existing tasks
  ){
    this.taskName = tasks.taskName || '';
    this.mode = tasks.mode || 'create';
    this.existingNames = tasks.existingNames || [];
  }
  isDuplicate(): boolean {
    return this.existingNames.includes(this.taskName.trim().toLowerCase());
  }
  save(): void {
    if(!this.isDuplicate()) 
      this.dialogRef.close(this.taskName);
  }
}
