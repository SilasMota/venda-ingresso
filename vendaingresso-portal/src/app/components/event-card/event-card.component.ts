import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../interfaces/Event';
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {
  @Input() event!: Event;
  constructor() { }

  ngOnInit(): void {
  }

}
