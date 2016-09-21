import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { yklibDemoRouting } from './yklib-demo.routing';
import { YklibDemo } from './yklib-demo.main';


@NgModule({
  declarations: [
    YklibDemo
  ],
  imports: [
    FormsModule,
    HttpModule,
    NgbModule,
    BrowserModule,
    yklibDemoRouting
  ],
  providers: []
})

export class YklibDemoModule {
}
