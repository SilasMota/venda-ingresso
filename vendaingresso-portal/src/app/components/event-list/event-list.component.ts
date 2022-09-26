import { Component, OnInit } from '@angular/core';
import { Event } from '../../interfaces/Event';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events : Event[] = [];
  constructor(private eventService: EventService) { 
    this.getEvents();
  }

  ngOnInit(): void {
  }

  getEvents(): void{
    this.eventService.getAll().subscribe((events) => (this.events = events));
    console.log(this.events)
  }

}
