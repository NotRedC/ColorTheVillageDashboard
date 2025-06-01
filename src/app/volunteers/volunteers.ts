import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { VolunteerHistory } from '../volunteer-history/volunteer-history';



@Component({
  selector: 'app-volunteers',
  imports: [MatTableModule, MatSort, MatSortModule, MatTooltipModule, MatButtonModule],
  templateUrl: './volunteers.html',
  styleUrl: './volunteers.scss'
})
export class Volunteers implements AfterViewInit {
  constructor(private dialog: MatDialog) {}
  displayedColumns = [
  'profile',
  'email',
  'phone',
  'age',
  'gender',
  'mealOption',
  'fieldOfWork',
  'jobExperience',
  'job',
  'workplace',
  'actions'
];

volunteers = [
  {
    name: 'Elena Popescu',
    photoUrl: 'https://i.pravatar.cc/40?img=1',
    email: 'elena.popescu@example.com',
    phone: '+40 712 345 678',
    age: 27,
    gender: 'Female',
    mealOption: 'Vegetarian',
    fieldOfWork: 'Architecture',
    jobExperience: '2 years',
    job: 'Restoration Architect',
    workplace: 'Civic Studio',
    events: [
      { name: 'ColorTheVillage Alba Iulia', date: '2023-07-10' },
      { name: 'ColorTheVillage Timișoara', date: '2024-06-15' }
    ]
  },
  {
    name: 'Vlad Ionescu',
    photoUrl: 'https://i.pravatar.cc/40?img=2',
    email: 'vlad.ionescu@example.com',
    phone: '+40 745 123 456',
    age: 31,
    gender: 'Male',
    mealOption: 'Regular',
    fieldOfWork: 'Engineering',
    jobExperience: '5 years',
    job: 'Site Supervisor',
    workplace: 'Urban Construct'
  },
  {
    name: 'Maria Georgescu',
    photoUrl: 'https://i.pravatar.cc/40?img=3',
    email: 'maria.georgescu@example.com',
    phone: '+40 723 456 789',
    age: 24,
    gender: 'Female',
    mealOption: 'Vegan',
    fieldOfWork: 'Art',
    jobExperience: '1 year',
    job: 'Mural Artist',
    workplace: 'Freelance'
  },
  {
    name: 'Andrei Dumitru',
    photoUrl: 'https://i.pravatar.cc/40?img=4',
    email: 'andrei.dumitru@example.com',
    phone: '+40 721 654 321',
    age: 29,
    gender: 'Male',
    mealOption: 'Regular',
    fieldOfWork: 'Education',
    jobExperience: '3 years',
    job: 'Teacher',
    workplace: 'Liceul Banat'
  },
  {
    name: 'Ioana Radu',
    photoUrl: 'https://i.pravatar.cc/40?img=5',
    email: 'ioana.radu@example.com',
    phone: '+40 726 987 654',
    age: 35,
    gender: 'Female',
    mealOption: 'Vegetarian',
    fieldOfWork: 'Healthcare',
    jobExperience: '10 years',
    job: 'Nurse',
    workplace: 'Spitalul Municipal'
  },
  {
    name: 'Cristian Pop',
    photoUrl: 'https://i.pravatar.cc/40?img=6',
    email: 'cristian.pop@example.com',
    phone: '+40 722 111 222',
    age: 22,
    gender: 'Male',
    mealOption: 'Regular',
    fieldOfWork: 'Student',
    jobExperience: 'Intern',
    job: 'Civil Engineering Student',
    workplace: 'Universitatea Politehnica'
  },
  {
    name: 'Gabriela Stan',
    photoUrl: 'https://i.pravatar.cc/40?img=7',
    email: 'gabriela.stan@example.com',
    phone: '+40 733 333 444',
    age: 28,
    gender: 'Female',
    mealOption: 'Vegan',
    fieldOfWork: 'NGO',
    jobExperience: '4 years',
    job: 'Project Manager',
    workplace: 'Asociația Verde'
  },
  {
    name: 'Radu Marinescu',
    photoUrl: 'https://i.pravatar.cc/40?img=8',
    email: 'radu.marinescu@example.com',
    phone: '+40 734 555 666',
    age: 40,
    gender: 'Male',
    mealOption: 'Regular',
    fieldOfWork: 'Construction',
    jobExperience: '15 years',
    job: 'Foreman',
    workplace: 'Construct Plus'
  },
  {
    name: 'Simona Iliescu',
    photoUrl: 'https://i.pravatar.cc/40?img=9',
    email: 'simona.iliescu@example.com',
    phone: '+40 735 777 888',
    age: 26,
    gender: 'Female',
    mealOption: 'Vegetarian',
    fieldOfWork: 'Design',
    jobExperience: '2 years',
    job: 'Interior Designer',
    workplace: 'Studio Creativ'
  },
  {
    name: 'Mihai Petrescu',
    photoUrl: 'https://i.pravatar.cc/40?img=10',
    email: 'mihai.petrescu@example.com',
    phone: '+40 736 999 000',
    age: 33,
    gender: 'Male',
    mealOption: 'Regular',
    fieldOfWork: 'Logistics',
    jobExperience: '7 years',
    job: 'Logistics Coordinator',
    workplace: 'LogiTrans'
  }
];

  dataSource = new MatTableDataSource(this.volunteers);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
}

  viewHistory(volunteer: any): void {
  this.dialog.open(VolunteerHistory, {
    width: '500px',
    data: volunteer
  });
}

}



