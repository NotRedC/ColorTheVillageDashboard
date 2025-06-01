import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-volunteer-history',
  imports: [CommonModule, MatDialogModule, MatListModule, MatIconModule, MatButtonModule],
  templateUrl: './volunteer-history.html',
  styleUrl: './volunteer-history.scss'
})
export class VolunteerHistory {
  constructor(@Inject(MAT_DIALOG_DATA) public volunteer: any) {}
}
