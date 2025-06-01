import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

interface Donation {
  donorName: string;
  amount: number;
  currency: string;
  date: string;
  status: 'Paid' | 'Pending';
}

@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [
    MatTableModule,
    MatSortModule,
    CommonModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  templateUrl: './donations.html',
  styleUrls: ['./donations.scss']
})
export class Donations implements AfterViewInit {
  donations: Donation[] = [
    {
      donorName: 'Jane Doe',
      amount: 50,
      currency: 'EUR',
      date: '2025-05-31',
      status: 'Paid'
    },
    {
      donorName: 'Alex Popescu',
      amount: 25,
      currency: 'EUR',
      date: '2025-05-29',
      status: 'Paid'
    },
    {
      donorName: 'Maria Ionescu',
      amount: 100,
      currency: 'EUR',
      date: '2025-05-25',
      status: 'Pending'
    }
  ];

  displayedColumns: string[] = ['donorName', 'amount', 'currency', 'date', 'status'];
  dataSource = new MatTableDataSource(this.donations);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  exportToCSV(): void {
  const headers = this.displayedColumns.map(col => col.charAt(0).toUpperCase() + col.slice(1));
  const rows = this.dataSource.filteredData.map(row =>
    this.displayedColumns.map(col => {
      const value = (row as any)[col];

      if (col === 'date') {
        const d = new Date(value);
        return `"${d.toLocaleDateString('en-GB')}"`;
    }

      return typeof value === 'string' ? `"${value}"` : value;

    }).join(',')
  );

  const csvContent = [headers.join(','), ...rows].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  const now = new Date();
  const timestamp = `${now.getFullYear()}-${(now.getMonth()+1)
  .toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}`;
  const filename = `donations_${timestamp}.csv`;
  link.setAttribute('download', filename);
  link.click();
}

}