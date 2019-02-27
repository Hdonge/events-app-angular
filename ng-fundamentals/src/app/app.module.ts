import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/events.service';

@NgModule({
  declarations: [
    NavbarComponent,
    EventThumbnailComponent,
    EventsListComponent,
    EventsAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
