import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles:[`
        .pad-left {margin-left:10px;}
        .well div {color: red; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any

    logFoo(){
        console.log('Foo')
    }
}