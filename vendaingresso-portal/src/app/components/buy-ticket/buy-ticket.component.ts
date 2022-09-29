import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Bearer } from 'src/app/interfaces/Bearer';
import { Event } from 'src/app/interfaces/Event';
import { Ticket } from 'src/app/interfaces/Ticket';
import { EventService } from 'src/app/services/event/event.service';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ]
})
export class BuyTicketComponent implements OnInit {
  bearer: Bearer = {
    id:null,
    email:null,
    rg:null,
    name:null,
    date: null
};  
  event:Event = {
    id: null,
    name: null,
    date:null,
    vacancy: null,
    price: null
  };
  ticket:Ticket = {
    id:null,
    bearer: this.bearer,
    event: this.event
  };
  formaPagamento = 'px';
  firstFormGroup = this._formBuilder.group({
    nameForm: ['', Validators.required],
    rgForm: ['', Validators.required],
    dtNascForm: ['', Validators.required],
    emailForm: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
  });
  constructor(private _formBuilder: FormBuilder, private eventService:EventService, private route:ActivatedRoute, private ticketService: TicketService) {
    this.getEvent();
  }
  getEvent() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.eventService.getEvent(id).subscribe((event) => (this.event = event));
  }

  ngOnInit(): void {
  }

  submitBearer(){
    this.ticket.bearer = this.bearer;
    this.getEvent();
    this.ticket.event = this.event;
  }

  saveTicket(){
    this.ticketService.createTicket(this.ticket).subscribe((ticket) => (this.ticket = ticket));
  }

}
