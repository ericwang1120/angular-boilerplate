import { User } from './../../../core/ngrx/users/models/user';
import { Event } from './../../../core/ngrx/events/models/event';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

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
  @Input('currentUser') public currentUser: User;
  @Input('userLoading') public userLoading: boolean;

  get slicedEvents(): Event[] {
    return this.events ? this.events.slice(0, 5) : [];
  }

  constructor(private sanitization: DomSanitizer) { }

  public getBackground(imageUrl) {
    return this.sanitization.bypassSecurityTrustStyle(`url(${imageUrl})`);
  }

}
