import * as angular from "angular";

import { Inject, Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable, firstValueFrom } from "rxjs";
import { downgradeInjectable } from "@angular/upgrade/static";

@Injectable({
  providedIn: "root",
})
export class OpenWeatherService {
  private apiKey = "279b4be6d54c8bf6ea9b12275a567156";
  private apiBaseUrl = "http://api.openweathermap.org/data/2.5/";

  constructor(@Inject(HttpClient) private http: HttpClient) {}

  private buildParams(location: string): HttpParams {
    return new HttpParams()
      .set("q", location)
      .set("APPID", this.apiKey)
      .set("mode", "json")
      .set("units", "metric")
      .set("lang", "en");
  }

  queryWeather(location: string): Observable<any> {
    console.log(location);
    const params = this.buildParams(location);

    return this.http.get<any>(`${this.apiBaseUrl}weather`, {
      params,
      responseType: "json",
    });
  }

  async queryForecast(location: string) {
    console.log(location);
    const params = this.buildParams(location);

    const data = await firstValueFrom(
      this.http.get<any>(`${this.apiBaseUrl}forecast`, {
        params,
        responseType: "json",
      })
    );

    console.log(data);

    return data;
  }

  async queryForecastDaily({
    location,
    cnt = 7,
  }: {
    location: string;
    cnt: number;
  }) {
    const params = this.buildParams(location).set("cnt", cnt.toString());

    return await firstValueFrom(
      this.http.get<any>(`${this.apiBaseUrl}forecast/daily`, {
        params,
        responseType: "json",
      })
    );
  }
}

angular
  .module("openWeatherAppNew", [])
  .factory("openWeatherMap", downgradeInjectable(OpenWeatherService));
