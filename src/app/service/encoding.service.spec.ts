import {TestBed} from '@angular/core/testing';

import {EncodingService} from './encoding.service';

describe(EncodingService.name, () => {
  const provideParameters: { decodedValue: string, encodedValue: string }[] = [
    {decodedValue: "value", encodedValue: "dmFsdWU="},
    {decodedValue: "Test@Base64Service&WithValues$==", encodedValue: "VGVzdEBCYXNlNjRTZXJ2aWNlJldpdGhWYWx1ZXMkPT0="},
    {decodedValue: "", encodedValue: ""},
    {decodedValue: "   ", encodedValue: "ICAg"},
  ];

  let service: EncodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodingService);
  });

  it("should create encoding service", () => {
    expect(service).toBeTruthy();
  });

  provideParameters.forEach((parameter: { decodedValue: string, encodedValue: string }) => {
    it(`should encode '${parameter.decodedValue}' to base64`, () => {
      const result: string = service.encode(parameter.decodedValue);
      expect(result).toEqual(parameter.encodedValue);
    });
  });

  provideParameters.forEach((parameter: { decodedValue: string, encodedValue: string }) => {
    it(`should decode '${parameter.encodedValue}' to plain text`, () => {
      const result: string = service.decode(parameter.encodedValue);
      expect(result).toEqual(parameter.decodedValue);
    });
  });
});
