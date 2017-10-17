import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const MODULES = [
    SharedModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    NgbModule.forRoot(),
    StoreDevtoolsModule.instrument({
        maxAge: 25 //  Retains last 25 states
    })
];
