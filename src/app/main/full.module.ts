import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { FullComponent } from './full.component';
import { fullRouting } from './full.routing';


@NgModule({
    declarations: [
        FullComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ButtonsModule,
        fullRouting
    ],
    providers: []
})
export class FullModule {
}
