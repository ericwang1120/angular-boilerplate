import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html'
})
export class ResultTableComponent {
  @Input('timesOfSwitchMap') public timesOfSwitchMap: string;
  @Input('timesOfMergeMap') public timesOfMergeMap: string;
  @Input('timesOfDebounce') public timesOfDebounce: string;

}
