import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Base64EncoderComponent} from './base64-encoder.component';
import {appConfig} from "../../../app.config";
import {EncodingService} from "../../../service/encoding.service";
import {EncodingOptions} from "../../../model/encoding-options";
import SpyObj = jasmine.SpyObj;

describe(Base64EncoderComponent.name, () => {
  let component: Base64EncoderComponent;
  let fixture: ComponentFixture<Base64EncoderComponent>;
  let encodingService: SpyObj<EncodingService>;

  beforeEach(async () => {
    const encodingServiceSpy = jasmine.createSpyObj("EncodingService", ["encode"]);
    await TestBed.configureTestingModule({
      imports: [Base64EncoderComponent],
      providers: [appConfig.providers, {provide: EncodingService, useValue: encodingServiceSpy}]
    }).compileComponents();

    fixture = TestBed.createComponent(Base64EncoderComponent);
    component = fixture.componentInstance;
    encodingService = TestBed.inject(EncodingService) as SpyObj<EncodingService>;
    fixture.detectChanges();
  });

  it("should create base64 encoder component", () => {
    expect(component).toBeTruthy();
  });

  it("should show an input text area", () => {
    const gridTiles = fixture.nativeElement.querySelectorAll("mat-grid-list mat-grid-tile");
    const textArea = gridTiles[0].querySelector("div app-text-area");
    expect(textArea).toBeTruthy();
  });

  it("should show an output text area", () => {
    const gridTiles = fixture.nativeElement.querySelectorAll("mat-grid-list mat-grid-tile");
    const readonlyTextArea = gridTiles[1].querySelector("div app-readonly-text-area");
    expect(readonlyTextArea.toBeTruthy)
  });

  it("should encode value to base64 if no option is selected", () => {
    encodingService.encode.and.returnValue("VmFsdWU=")
    component.selectedOption = "";
    component.transform("Value");
    fixture.detectChanges();
    const readOnlyTextArea = fixture.nativeElement.querySelector("app-readonly-text-area textarea");
    expect(encodingService.encode).toHaveBeenCalledWith("Value");
    expect(readOnlyTextArea.value).toEqual("VmFsdWU=");
  });

  it("should encode value to base64 if encode is selected", () => {
    encodingService.encode.and.returnValue("VmFsdWU=")
    component.selectedOption = EncodingOptions.ENCODE
    component.transform("Value");
    fixture.detectChanges();
    const readOnlyTextArea = fixture.nativeElement.querySelector("app-readonly-text-area textarea");
    expect(encodingService.encode).toHaveBeenCalledWith("Value");
    expect(readOnlyTextArea.value).toEqual("VmFsdWU=");
  });
});
