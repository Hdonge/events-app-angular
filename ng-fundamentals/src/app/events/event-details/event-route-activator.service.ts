import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/events.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private eventService: EventService) {

    }

    canActivate() {

    }
}
