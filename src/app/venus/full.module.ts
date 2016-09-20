import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './full.component';
import { fullRouting } from './full.routing';
import { NavbarComponent } from './navbar/navbar.component';
import { MyCourseComponent } from './myCourse/my-course.component';
import { myCourseRouting } from './myCourse/my-course.routing';

@NgModule({
    declarations: [
        FullComponent,
        NavbarComponent,
        MyCourseComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        NgbModule,
        fullRouting,
        myCourseRouting
    ],
    providers: []
})
export class FullModule {
}
