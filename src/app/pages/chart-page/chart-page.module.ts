import { ChartsModule } from 'ng2-charts';
import { ChartPageRoutes } from './chart-page.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartPageComponent } from './chart-page.component';

@NgModule({
  imports: [
    CommonModule,
    ChartPageRoutes,
    ChartsModule
  ],
  declarations: [ChartPageComponent]
})
export class ChartPageModule { }
