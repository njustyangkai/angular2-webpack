import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { MyCourseComponent } from './myCourse/my-course.component';
import { myCourseRouting } from './myCourse/my-course.routing';
import { YkComponentsDemoModule } from './shared/yk-components-demo/yk-components-demo.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    YkComponentsDemoModule,
    routing,
    myCourseRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
