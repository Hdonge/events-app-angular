import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr/>
            <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date:{{event.name}}</div>
            <div>Time:{{event.time}}</div>
            <div>Price: \${{event.price}}</div>
        </div>
    `
})
export class EventsListComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '09/2016/2036',
        time: '10:00 am',
        price: 599,
        imageUrl: '/assets/images/angularconnect-shield.png'
    }
}
