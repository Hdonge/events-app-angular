import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
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
