import "angular";
import "angular-route";
import "angular-resource";
import "iso-3166-country-codes-angular";

import "./app";
import "./controllers";
import "./directives";
import "./filters";
import "./services";

import "@angular/compiler";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

@NgModule({
  imports: [BrowserModule, UpgradeModule],
})
export class AppModule {
  ngDoBootstrap() {}
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((platformRef) => {
    console.log("Angular Bootstrap!");
    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.body, ["openWeatherApp"], { strictDi: true });
  });
