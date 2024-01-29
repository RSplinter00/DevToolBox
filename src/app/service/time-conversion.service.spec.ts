import {TestBed} from "@angular/core/testing";

import {TimeConversionService} from "./time-conversion.service";

describe(TimeConversionService.name, () => {
  let service: TimeConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeConversionService);
  });

  it("should create Time Conversion service", () => {
    expect(service).toBeTruthy();
  });

  it("should convert to UTC time", () => {
    const date: Date = new Date();
    const utcTime: string = service.convertToUtcTime(date);
    expect(utcTime).toBe(date.toUTCString());
  });

  it("should return 'Invalid Date' for invalid date when converting to UTC time", () => {
    const date: Date = new Date("invalid date");
    const utcTime: string = service.convertToUtcTime(date);
    expect(utcTime).toBe("Invalid Date");
  });

  it("should convert to local time", () => {
    const date: Date = new Date();
    const localTime: string = service.convertToLocalTime(date);
    expect(localTime).toBe(date.toLocaleString());
  });

  it("should return 'Invalid Date' for invalid date when converting to local time", () => {
    const date: Date = new Date("invalid date");
    const utcTime: string = service.convertToLocalTime(date);
    expect(utcTime).toBe("Invalid Date");
  });

  it("should convert to ISO 8601", () => {
    const date: Date = new Date();
    const isoTime: string = service.convertToISOTime(date);
    expect(isoTime).toBe(date.toISOString());
  });

  it("should return 'Invalid Date' for invalid date when converting to unix time", () => {
    const date: Date = new Date("invalid date");
    const isoTime: string = service.convertToISOTime(date);
    expect(isoTime).toBe("Invalid Date");
  });

  it("should convert to Unix time", () => {
    const date: Date = new Date();
    const unixTime: string = service.convertToUnixTime(date);
    expect(unixTime).toBe(Math.floor(date.getTime() / 1000).toString());
  });

  it("should return 'Invalid Date' for invalid date when converting to unix time", () => {
    const date: Date = new Date("invalid date");
    const utcTime: string = service.convertToUnixTime(date);
    expect(utcTime).toBe("Invalid Date");
  });
});
