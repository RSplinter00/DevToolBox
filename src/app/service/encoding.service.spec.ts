import {TestBed} from '@angular/core/testing';

import {EncodingService} from './encoding.service';

describe(EncodingService.name, () => {
  const provideParameters: { input: string, expectedOutput: string }[] = [
    {input: "value", expectedOutput: "dmFsdWU="},
    {input: "Test@Base64Service&WithValues$==", expectedOutput: "VGVzdEBCYXNlNjRTZXJ2aWNlJldpdGhWYWx1ZXMkPT0="},
    {input: "", expectedOutput: ""},
    {input: "   ", expectedOutput: "ICAg"},
  ];

  let service: EncodingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncodingService);
  });

  it("should create encoding service", () => {
    expect(service).toBeTruthy();
  });

  provideParameters.forEach(parameter => {
    it(`should encode '${parameter.input}' to base64`, () => {
      const result = service.encode(parameter.input)
      expect(result).toEqual(parameter.expectedOutput)
    });
  });
});
