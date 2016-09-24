import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MdButtonModule } from '@angular2-material/button';
import { MdSidenavModule} from '@angular2-material/sidenav';
import { MdToolbarModule} from '@angular2-material/toolbar';
import { MdCardModule} from '@angular2-material/card';

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
        MdButtonModule.forRoot(),
        MdSidenavModule.forRoot(),
        MdToolbarModule.forRoot(),
        MdCardModule.forRoot(),
        fullRouting
    ],
    providers: []
})
export class FullModule {
}
