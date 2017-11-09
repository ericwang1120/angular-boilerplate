import { Event } from './../../../core/ngrx/events/models/event';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEventComponent {
  @Input('loading') public loading: boolean;
  @Input('userName') public userName: string;
  @Input('events') public events: Event[];

  get slicedEvents() {
    return this.events.slice(0, 5);
  }

}
