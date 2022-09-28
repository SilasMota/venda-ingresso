import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Ticket } from 'src/app/interfaces/Ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-search-ticket',
  templateUrl: './search-ticket.component.html',
  styleUrls: ['./search-ticket.component.css']
})
export class SearchTicketComponent implements OnInit {

  tickets!: Ticket[];
  rg:string = "";
  formGroup = this._formBuilder.group({
    rgForm:[] 
  });

  constructor(private ticketService:TicketService, private _formBuilder: FormBuilder) {
    this.getTickets();
   }

  ngOnInit(): void {
  }

  getTickets(): void{
    this.ticketService.getAll().subscribe((tickets) => (this.tickets = tickets));
    console.log(this.tickets)
  }

  searchTickets() {
    this.ticketService.getTicket(this.rg).subscribe((tickets) => (this.tickets = tickets));
    console.log(this.tickets)
  }
}
