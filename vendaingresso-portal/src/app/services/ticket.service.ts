import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  
  private apiUrl = "http://localhost:8080/api/v1/tickets";
  private apiUrlstatic = "http://localhost:3000/tickets";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl);
  }

  getTicket(rg: string):Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}/${rg}`);
  }

  createTicket(ticket: Ticket):Observable<Ticket>{
    return this.http.post<Ticket>(`${this.apiUrl}`,ticket);
  }
}
