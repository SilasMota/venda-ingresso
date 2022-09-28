import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/interfaces/Ticket';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.css']
})
export class TicketCardComponent implements OnInit {
  @Input() ticket!: Ticket;

  constructor() { }

  ngOnInit(): void {
  }

  getBearerRg() {
    return this.ticket?.bearer?.rg;
  }
  getBearerName() {
    return this.ticket?.bearer?.name;
  }
  getEventDate() {
    return this.ticket?.event?.date;
  }
  getEventName() {
    return this.ticket?.event?.name;
  }
}
