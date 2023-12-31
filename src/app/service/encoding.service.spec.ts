import {TestBed} from "@angular/core/testing";

import {EncodingService} from "./encoding.service";

type EncodingData = {
  decodedValue: string;
  encodedValue: string;
  urlEncodedValue: string;
};

describe(EncodingService.name, () => {
  const provideParameters: EncodingData[] = [
    {decodedValue: "value", encodedValue: "dmFsdWU=", urlEncodedValue: "value"},
    {
      decodedValue: "Test@Service&With?$==",
      encodedValue: "VGVzdEBTZXJ2aWNlJldpdGg/JD09",
      urlEncodedValue: "Test%40Service%26With%3F%24%3D%3D"
    },
    {decodedValue: "", encodedValue: "", urlEncodedValue: ""},
    {decodedValue: "   ", encodedValue: "ICAg", urlEncodedValue: "%20%20%20"},
  ];

  let service: EncodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodingService);
  });

  it("should create encoding service", () => {
    expect(service).toBeTruthy();
  });

  provideParameters.forEach((parameter: EncodingData) => {
    it(`should encode '${parameter.decodedValue}' to base64`, () => {
      const result: string = service.encode(parameter.decodedValue);
      expect(result).toEqual(parameter.encodedValue);
    });
  });

  provideParameters.forEach((parameter: EncodingData) => {
    it(`should decode '${parameter.encodedValue}' to plain text`, () => {
      const result: string = service.decode(parameter.encodedValue);
      expect(result).toEqual(parameter.decodedValue);
    });
  });

  provideParameters.forEach((parameter: EncodingData) => {
    it(`should url encode '${parameter.decodedValue}' to base64`, () => {
      const result: string = service.urlEncode(parameter.decodedValue);
      expect(result).toEqual(parameter.urlEncodedValue);
    });
  });

  provideParameters.forEach((parameter: EncodingData) => {
    it(`should url decode '${parameter.urlEncodedValue}' to plain text`, () => {
      const result: string = service.urlDecode(parameter.urlEncodedValue);
      expect(result).toEqual(parameter.decodedValue);
    });
  });
});
