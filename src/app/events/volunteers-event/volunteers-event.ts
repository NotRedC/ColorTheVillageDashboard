import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Event } from '../../models/event.model'; // Adjust the import path as necessary
import { EventVolunteer } from '../../models/volunteer.model'; // Adjust the import path as necessary
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatAccordion } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSortModule, MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-event-task-volunteers-dialog',
  standalone: true,
  imports: [MatSortModule, MatExpansionModule, MatAccordion, MatTableModule, CommonModule, MatDialogModule, MatCardModule, MatListModule, MatButtonModule, MatFormFieldModule],
  templateUrl: './volunteers-event.html',
  styleUrls: ['./volunteers-event.scss']
})
export class VolunteersEvent {
  dataSource: MatTableDataSource<EventVolunteer>;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      event: Event;
      confirmedVolunteers: EventVolunteer[];
    },
    public dialogRef: MatDialogRef<VolunteersEvent>
  ) {
        this.dataSource = new MatTableDataSource(this.data.confirmedVolunteers);
  }
  displayedColumns: string[] = ['volunteerName', 'volunteerEmail'];

  getVolunteersForTask(taskId: number): EventVolunteer[] {
    return this.data.confirmedVolunteers.filter(v =>
      v.assignedTaskIds?.includes(taskId),
    );
  }
}
