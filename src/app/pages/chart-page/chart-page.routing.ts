import { ChartPageComponent } from './chart-page.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChartPageComponent },
];

export const ChartPageRoutes = RouterModule.forChild(routes);
