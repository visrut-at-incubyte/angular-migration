import * as angular from "angular";

import { Injectable } from "@angular/core";
import { downgradeInjectable } from "@angular/upgrade/static";

@Injectable({
  providedIn: "root",
})
export class ApiVersionService {
  private app: angular.auto.IInjectorService | undefined;

  version = "0.1.6";

  getVersion() {
    return this.version;
  }

  destroy() {
    if (this.app) {
      this.app.get("$rootScope").$destroy();
    }
  }
}

angular
  .module("openWeatherAppNewVersion", [])
  .factory("apiVersion", downgradeInjectable(ApiVersionService));
