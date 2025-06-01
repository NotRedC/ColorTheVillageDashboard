import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
//import { CreateEvent } from '../events/create-event/create-event';
import { Event } from '../models/event.model';


@Component({
  selector: 'app-dashboard',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {
   constructor(private dialog: MatDialog) {}
  // createEvent(): void {
  //     const dialogRef = this.dialog.open(CreateEvent, {
  //     width: '600px'
  //   });
    /*
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newId = this.events.length + 1;
        const newEvent = { id: newId, ...result, confirmedVolunteers: [], isArchived: false } as Event;
        this.events.push(newEvent);
        this.dataSource.data = [...this.events];
      }
    });
    */
}

