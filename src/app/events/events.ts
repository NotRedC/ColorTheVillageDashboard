import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Event } from '../models/event.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
//import { CreateEvent } from './create-event/create-event';
//import { ArchivedEvents } from './archived-events/archived-events';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';
//import { VolunteersEvent } from './volunteers-event/volunteers-event';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EventService } from '../services/event-service';

@Component({
  selector: 'app-events',
  imports: [MatTooltipModule, MatTableModule, MatButtonModule, MatIconModule, MatSortModule, MatSort, CommonModule, MatDialogModule],
  templateUrl: './events.html',
  styleUrl: './events.scss'
})
export class Events implements AfterViewInit {
  displayedColumns = ['name', 'startDate', 'endDate', 'confirmedVolunteers', 'actions'];

  constructor(private dialog: MatDialog, private eventService: EventService) {}

  dataSource = new MatTableDataSource<Event>([]);
  events: Event[] = [];

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit() {
    this.eventService.fetchEvents().subscribe(events => {
      this.events = events;
      this.dataSource.data = events;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // //editEvent(event: Event): void {
  //   const dialogRef = this.dialog.open(CreateEvent, {
  //     width: '600px',
  //     data: event 
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // Use the service to update the event via API
  //       this.eventService.updateEvent(event.id, result).subscribe(updatedEvent => {
  //         const idx = this.events.findIndex(e => e.id === event.id);
  //         if (idx !== -1) {
  //           this.events[idx] = updatedEvent;
  //           this.dataSource.data = [...this.events];
  //         }
  //       });
  //     }
  //   });
  // }

  // viewEventHistory(): void {
  //   this.dialog.open(ArchivedEvents, {
  //     data: this.events.filter(e => e.isArchived)
  //   });
  // }

  // createEvent(): void {
  //   const dialogRef = this.dialog.open(CreateEvent, {
  //     width: '600px'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // Use the service to create the event via API
  //       this.eventService.createEvent(result).subscribe(newEvent => {
  //         this.events.push(newEvent);
  //         this.dataSource.data = [...this.events];
  //       });
  //     }
  //   });
  // }

  // archiveEvent(event: Event): void {
  //   const dialogRef = this.dialog.open(ConfirmDialog, {
  //     data: {
  //       title: 'Confirm Archive',
  //       message: `Are you sure you want to archive the event "${event.title}"?`
  //     }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       // Use the service to archive the event via API
  //       this.eventService.archiveEvent(event.id).subscribe(() => {
  //         const index = this.events.findIndex(e => e.id === event.id);
  //         if (index !== -1) {
  //           this.events[index].isArchived = true;
  //           this.dataSource.data = this.events.filter(e => !e.isArchived);
  //         }
  //       });
  //     }
  //   });
  // }

  // viewVolunteers(event: Event): void {
  //   this.dialog.open(VolunteersEvent, {
  //     data: {
  //       event: event,
  //       confirmedVolunteers: event.confirmedVolunteers ?? []
  //     },
  //     width: '600px'
  //   });
  // }
}