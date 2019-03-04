import { Component, OnInit } from '@angular/core';

import { EventService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';


@Component({
  selector: 'events-list',
  template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
        <div class="well">
            <div>Hello World</div>
        </div>
        <div class="row">
            <div class="col-md-5"  *ngFor="let event of events">
            <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>                    
            </div>
        </div>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Click me!</button>
    </div>
    `,
  styles: [`
        .well div {color: red; }
    `]

})
export class EventsListComponent implements OnInit {
  events: any[]
  constructor(private eventService: EventService, private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.events = this.eventService.getEvents()
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success(eventName)
  }
}
