import * as angular from 'angular';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { downgradeInjectable } from '@angular/upgrade/static';

@Injectable({
  providedIn: 'root',
})
export class OpenWeatherMapService {
  private apiKey = '279b4be6d54c8bf6ea9b12275a567156';
  private apiBaseUrl = 'http://api.openweathermap.org/data/2.5/';

  constructor(private httpClient: HttpClient) {}

  queryWeather({ location }: { location: string }): Promise<any> {
    const params = new HttpParams()
      .set('q', location)
      .set('APPID', this.apiKey)
      .set('mode', 'json')
      .set('units', 'metric')
      .set('lang', 'en');

    return this.httpClient
      .get(this.apiBaseUrl + 'weather', { params: params })
      .toPromise();
  }

  queryForecast({ location }: { location: string }): Promise<any> {
    const params = new HttpParams()
      .set('q', location)
      .set('APPID', this.apiKey)
      .set('mode', 'json')
      .set('units', 'metric')
      .set('lang', 'en');

    return this.httpClient
      .get(this.apiBaseUrl + 'forecast', { params: params })
      .toPromise();
  }

  queryForecastDaily({ location }: { location: string }): Promise<any> {
    const params = new HttpParams()
      .set('q', location)
      .set('APPID', this.apiKey)
      .set('mode', 'json')
      .set('units', 'metric')
      .set('lang', 'en')
      .set('path', 'forecast')
      .set('subPath', 'daily')
      .set('cnt', '7');

    return this.httpClient
      .get(this.apiBaseUrl + 'forecast', { params: params })
      .toPromise();
  }
}

angular
  .module('openWeatherAppLogic')
  .factory('openWeatherMap', downgradeInjectable(OpenWeatherMapService));
