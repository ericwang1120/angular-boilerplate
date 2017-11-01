import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Repository } from '../../../core/ngrx/repositories/models/repository';

@Component({
  selector: 'app-repository-table',
  styleUrls: ['./repository-table.component.scss'],
  templateUrl: './repository-table.component.html'
})
export class RepositoryTableComponent {
  @Input('repositories') public repositories: Repository[];
}
