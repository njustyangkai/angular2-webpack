import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { yklibDemoRouting } from './yklib-demo.routing';
import { YklibDemo } from './yklib-demo.main';
import { YkNavDemoComponent } from './yk-nav-demo/yk-nav-demo.component';
import { YklibModule } from '../yklib/yklib.module';


@NgModule({
  declarations: [
    YklibDemo,
      YkNavDemoComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    NgbModule,
    BrowserModule,
    YklibModule,
    yklibDemoRouting
  ],
  providers: []
})

export class YklibDemoModule {
}
