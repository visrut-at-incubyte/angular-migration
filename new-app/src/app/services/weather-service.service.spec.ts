import { TestBed } from '@angular/core/testing';

import { OpenWeatherMapService } from './weather-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('WeatherServiceService', () => {
  let service: OpenWeatherMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OpenWeatherMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
