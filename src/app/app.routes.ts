import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', loadChildren: './click-example-page#ClickExamplePageModule' },
  { path: 'click-example', loadChildren: './click-example-page#ClickExamplePageModule' },
  { path: '**', component: NoContentComponent },
];
