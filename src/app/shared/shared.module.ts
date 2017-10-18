import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    NavBarComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  providers: [

  ],
  exports: [NavBarComponent, SearchBarComponent]
})
export class SharedModule {
}
