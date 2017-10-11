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
  @Output() public search = new EventEmitter<string>();
}
