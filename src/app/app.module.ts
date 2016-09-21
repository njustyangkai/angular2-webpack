import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { YklibDemoModule } from 'shared/yklib-demo/yklib-demo.module.ts';
import { FullModule } from './venus/full.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FullModule,
    YklibDemoModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
