import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

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
        fullRouting
    ],
    providers: []
})
export class FullModule {
}
