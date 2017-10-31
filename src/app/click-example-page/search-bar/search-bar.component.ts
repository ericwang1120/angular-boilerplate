import { Observable } from 'rxjs/Observable';
import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  @Input('query') public query: string;
  @Input('timesOfLoop') public timesOfLoop = 0;
  @Output() public onSendActions = new EventEmitter<number>();

  public interval = 500;

  public sendActions(interval: number) {
    this.onSendActions.emit(interval);
  }
}
