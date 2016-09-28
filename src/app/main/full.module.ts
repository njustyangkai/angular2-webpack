import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ButtonsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import { FullComponent } from './full.component';
import { fullRouting } from './full.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { BoxComponent } from './box/box.component';
import { ButtonComponent } from './button/button.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        FullComponent,
        NavbarComponent,
        ToolbarComponent,
        DashboardComponent,
        BoxComponent,
        ButtonComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ButtonsModule,
        DropdownModule,
        fullRouting
    ],
    providers: []
})
export class FullModule {
}
