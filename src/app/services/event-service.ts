import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsSubject = new BehaviorSubject<Event[]>([]);
  events$: Observable<Event[]> = this.eventsSubject.asObservable();

  private api = 'http://d3v.ninja:8080/hacktm/';

  constructor(private http: HttpClient) {}

  fetchEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.api}/event/getAll`);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.api}/event/create`, event);
  }

  archiveEvent(eventId: number): Observable<void> {
    return this.http.post<void>(`${this.api}/event/archive/${eventId}`, {});
  }
  
  updateEvent(eventId: number, event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.api}/event/update/${eventId}`, event);
  }
}