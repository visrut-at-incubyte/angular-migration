import "angular";
import "angular-route";
import "angular-resource";
import "iso-3166-country-codes-angular";

import "./app";
import "./controllers";
import "./directives";
import "./filters";

import "@angular/compiler";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { OpenWeatherService } from "./services/weather-service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ExampleLocationsService } from "./services/location-service";
import { StormLocationsService } from "./services/strom-location-service";
import { ApiVersionService } from "./services/version-service";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpClientModule],
  providers: [
    OpenWeatherService,
    ExampleLocationsService,
    StormLocationsService,
    ApiVersionService,
    HttpClient,
  ],
})
export class AppModule {
  ngDoBootstrap() {}
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    console.log("Angular Bootstrap!");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(
      document.body,
      [
        "openWeatherApp",
        "openWeatherApp.controllers",
        "openWeatherApp.directives",
        "openWeatherApp.filters",
      ],
      { strictDi: true }
    );
    console.log("Angular Module Bootstraped!");
  });
