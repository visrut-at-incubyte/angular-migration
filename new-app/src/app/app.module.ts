import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';
import { OpenWeatherMapService } from './services/weather-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UpgradeModule, HttpClientModule],
  providers: [OpenWeatherMapService],
  bootstrap: [AppComponent],
})
export class AppModule {
  ngDoBootstrap() {}
}
