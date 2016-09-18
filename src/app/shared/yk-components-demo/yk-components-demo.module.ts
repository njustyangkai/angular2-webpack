import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ykComponentsDemoRouting } from './yk-components-demo.routing';
import { YkComponentsDemoNav } from './yk-components-demo.nav';


@NgModule({
  declarations: [
    YkComponentsDemoNav
  ],
  imports: [
    FormsModule,
    HttpModule,
    NgbModule,
    BrowserModule,
    ykComponentsDemoRouting
  ],
  providers: []
})

export class YkComponentsDemoModule {
}
