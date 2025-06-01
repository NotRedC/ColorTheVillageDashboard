// import { Component, Inject, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';  
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatListModule, MatListOption, MatSelectionList } from '@angular/material/list';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { TaskService } from '../../services/task';
// import { Task } from '../../models/task.model';
// import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { EditorModule } from '@tinymce/tinymce-angular';
// import { MatIconModule } from '@angular/material/icon';
// import { AbstractControl, ValidationErrors } from '@angular/forms';
// import { Event as AppEvent } from '../../models/event.model';

// @Component({
//   selector: 'app-create-event',
//   imports: [MatIconModule, EditorModule, MatFormFieldModule, MatDialogModule, MatDatepickerModule, MatListModule, MatCheckboxModule, ReactiveFormsModule, CommonModule, MatInputModule, MatButtonModule,MatDialogActions, MatSelectionList, MatListOption],
//   templateUrl: './create-event.html',
//   styleUrls: ['./create-event.scss'],
//   standalone: true
// })
// export class CreateEvent implements OnInit {
//     eventForm!: FormGroup;
//     availableTasks: Task[] = [];
//     selectedCoverPhotoBase64: string | null = null;

//     constructor(
//     private fb: FormBuilder,
//     private dialogRef: MatDialogRef<CreateEvent>,
//     private taskService: TaskService,
//     @Inject(MAT_DIALOG_DATA) public data: AppEvent | null // data can be used for editing existing events
//   ) {}
//   ngOnInit(): void {
//     this.availableTasks = this.taskService.getTasks();

//     this.eventForm = this.fb.group({
//       name: [this.data?.name],
//       location: [this.data?.location || ''],
//       startDate: [this.data?.startDate || ''],
//       endDate: [this.data?.endDate || ''],
//       tasks: [this.data?.tasks || [], Validators.required],
//       accommodation: [this.data?.accommodation || false],
//       accommodationWithTent: [this.data?.accommodationWithTent || false],
//       food: [this.data?.food || false],
//       prerequisites: [this.data?.prequisites || ''],
//     }, {validators: this.endDateValidation});
//   }
//   endDateValidation(control: AbstractControl): ValidationErrors | null {
//     const startDate = control.get('startDate')?.value;
//     const endDate = control.get('endDate')?.value;
//     if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
//       return { endBeforeStart: true };
//     }
//     return null;
//   }
//   onFileSelected(event: Event): void {
//     const file = (event.target as HTMLInputElement).files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         this.selectedCoverPhotoBase64 = reader.result as string;
//       };
//       reader.readAsDataURL(file);
//     }
//   }
  
//   createEvent(): void {
//     if (this.eventForm.valid) {
//       const eventData = {
//         ...this.eventForm.value,
//         coverPhoto: this.selectedCoverPhotoBase64
//       };
//       this.dialogRef.close(eventData);
//     }
  
// }
// }
