import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Event } from '../models/event.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CreateEvent } from './create-event/create-event';
import { ArchivedEvents } from './archived-events/archived-events';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
import { VolunteersEvent } from './volunteers-event/volunteers-event';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-events',
  imports: [MatTooltipModule, MatTableModule, MatButtonModule, MatIconModule, MatSortModule, MatSort, CommonModule, MatDialogModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events implements AfterViewInit {
  displayedColumns = ['name', 'location', 'startDate', 'endDate', 'confirmedVolunteers', 'actions'];

  constructor(private dialog: MatDialog) {}

  events: Event[] = [
    {
      id: 1,
      name: 'Restore the Town Hall',
      location: 'Village A',
      startDate: new Date('2025-07-01'),
      endDate: new Date('2025-07-05'),
      confirmedVolunteers: [
        {
          volunteerId: 101,
          assignedTaskIds: [1, 2, 3],
          volunteerName: 'John Doe',
          volunteerEmail: ''
        },
        {
          volunteerId: 102,
          assignedTaskIds: [2, 3],
          volunteerName: 'Jane Smith',
          volunteerEmail: ''
        }
      ],
      isArchived: false,
      tasks: [
        { taskId: 1, taskName: 'Clean the exterior' },
        { taskId: 2, taskName: 'Repair the roof' },
        { taskId: 3, taskName: 'Paint the walls' }
      ]
    },
    {
      id: 2,
      name: 'Paint the Community Center',
      location: 'Village B',
      startDate: new Date('2025-08-10'),
      endDate: new Date('2025-08-15'),
      confirmedVolunteers: [
        {
          volunteerId: 101,
          assignedTaskIds: [1, 2, 3],
          volunteerName: 'John Doe',
          volunteerEmail: ''
        },
        {
          volunteerId: 102,
          assignedTaskIds: [2, 3],
          volunteerName: 'Jane Smith',
          volunteerEmail: ''
        }
      ],
      isArchived: false,
      tasks: [
        { taskId: 1, taskName: 'Prepare the walls' },
        { taskId: 2, taskName: 'Paint the interior' },
        { taskId: 3, taskName: 'Clean up' }
      ]
    }
  ];

  dataSource = new MatTableDataSource(this.events);
  

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.data = this.events.filter(event => !event.isArchived);
}
editEvent(event: Event): void {
  const dialogRef = this.dialog.open(CreateEvent, {
    width: '600px',
    data: event 
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const idx = this.events.findIndex(e => e.id === event.id);
      if (idx !== -1) {
        this.events[idx] = {
          ...this.events[idx],
          ...result
        };
        this.dataSource.data = [...this.events];
      }
    }
  });
}

  viewEventHistory(): void {
  this.dialog.open(ArchivedEvents, {
    data: this.events.filter(e => e.isArchived)
  });
}

  createEvent(): void {
    const dialogRef = this.dialog.open(CreateEvent, {
    width: '600px'
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      const newId = this.events.length + 1;
      const newEvent = { id: newId, ...result, confirmedVolunteers: [], isArchived: false } as Event;
      this.events.push(newEvent);
      this.dataSource.data = [...this.events];
    }
  });
  }
  archiveEvent(event: Event): void {
    const dialogRef = this.dialog.open(ConfirmDialog, {
    data: {
      title: 'Confirm Archive',
      message: `Are you sure you want to archive the event "${event.name}"?`
    }
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
    const index = this.events.findIndex(e => e.id === event.id);
    if (index !== -1) {
      this.events[index].isArchived = true;
      this.dataSource.data = this.events.filter(e => !e.isArchived);
    }
  }
  });
  }

  viewVolunteers(event: Event): void {
    this.dialog.open(VolunteersEvent, {
      data:{
        event: event,
        confirmedVolunteers: event.confirmedVolunteers ?? []
      },
      width: '600px'
  });
}
}