import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../../interfaces/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private apiUrl = "http://localhost:3000/list-events";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  getEvent(id: number):Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }

}
