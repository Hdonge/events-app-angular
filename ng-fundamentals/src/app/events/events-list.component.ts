import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr />
        <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    </div>
    `

})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '09/2016/2036',
        time: '10:00 am',
        price: 599,
        imageUrl: '/assets/images/angularconnect-shield.png'
    }

    handleEventClicked(data) {
        console.log("Received:", data);
    }
}
