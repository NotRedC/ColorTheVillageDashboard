// import { Component, ViewChild } from '@angular/core';
// import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
// import { Inject } from '@angular/core'; 
// import { MatDialogRef } from '@angular/material/dialog';
// import { Event } from '../../models/event.model'; // Adjust the import path as necessary
// import { CommonModule } from '@angular/common';
// import { MatTableDataSource, MatTableModule } from '@angular/material/table';
// import { MatSortModule, MatSort } from '@angular/material/sort';
// import { MatButtonModule } from '@angular/material/button';

// @Component({
//   selector: 'app-archived-events',
//   imports: [ CommonModule, MatTableModule, MatSortModule, MatDialogModule, MatButtonModule],
//   templateUrl: './archived-events.html',
//   styleUrl: './archived-events.scss'
// })
// export class ArchivedEvents {
//   displayedColumns: string[] = ['name', 'location', 'startDate', 'endDate', 'confirmedVolunteers'];

//   dataSource!: MatTableDataSource<Event>;


//   constructor(@Inject(MAT_DIALOG_DATA) public archivedEvents: Event[], public dialogRef: MatDialogRef<ArchivedEvents>) {
//     this.dataSource = new MatTableDataSource<Event>(this.archivedEvents);
//   }

//   @ViewChild(MatSort) sort!: MatSort;
//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
// }
// }
