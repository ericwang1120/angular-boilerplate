import { Routes } from '@angular/router';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', loadChildren: './home#HomeModule' },
  // { path: 'listing/:path', loadChildren: './listing-page#listingPageModule' },
  { path: 'about', component: AboutComponent },
  // { path: 'click-example-page', loadChildren: './+click-example-page#ClickExamplePageModule' },
  { path: '**', component: NoContentComponent },
];
