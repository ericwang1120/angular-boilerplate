import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-search-bar',
  styleUrls: ['./search-bar.component.scss'],
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  @Output('load') public load = new EventEmitter();
}
