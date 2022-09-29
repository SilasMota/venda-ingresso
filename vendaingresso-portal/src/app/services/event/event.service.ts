import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../../interfaces/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  private apiUrlstatic = "http://localhost:3000/list-events";
  private apiUrl = "http://localhost:8080/api/v1/events";
  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
  }

  getEvent(id: number):Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }

}
