import { Injectable } from '@angular/core';
import { RegularVolunteer } from '../models/regular-volunteer.model'; 
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

    private api = 'http://d3v.ninja:8080/hacktm/'; // Replace with your actual API URL
  
    constructor(private http: HttpClient) {
    }
  
    getAllUsers(): Observable<RegularVolunteer[]> {
      return this.http.get<RegularVolunteer[]>(`${this.api}/user/getAll`);
    }
  
}
