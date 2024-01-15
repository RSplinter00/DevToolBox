import {ComponentFixture, TestBed} from "@angular/core/testing";

import {TimeConverterComponent} from "./time-converter.component";
import {provideNoopAnimations} from "@angular/platform-browser/animations";

describe(TimeConverterComponent.name, () => {
  let component: TimeConverterComponent;
  let fixture: ComponentFixture<TimeConverterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TimeConverterComponent],
      providers: [provideNoopAnimations()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Time Converter component", () => {
    expect(component).toBeTruthy();
  });

  it("should display input field and controls", () => {
    const header = fixture.nativeElement.querySelector("#time-converter-header");
    const headerText = header.querySelector("h1").textContent;
    const buttons = header.querySelectorAll("button");
    const input = fixture.nativeElement.querySelector("[data-testid='timestamp-input']");
    expect(headerText).toEqual("Input:");
    expect(buttons).toHaveSize(2);
    expect(buttons[0].textContent).toEqual("Now");
    expect(buttons[1].textContent).toEqual("Clear");
    expect(input).toBeTruthy();
  });

  it("should set current timestamp when pressed on 'now' button", () => {
    const currentTimeButton = fixture.nativeElement.querySelector("[data-testid='current-time-btn']");
    currentTimeButton.click();
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector("[data-testid='timestamp-input']");
    expect(input.value).toBeTruthy();
  });

  it("should set time formats when input field is changed", () => {
    const date: Date = new Date(2024, 1, 1);
    const unixTime: number = date.getTime() / 1000;
    component.timeConversionForm.get("inputTimestamp")?.setValue(date.getTime());
    fixture.detectChanges();
    expect(component.timeConversionForm.get("utcTime")?.value).toEqual(date.toUTCString());
    expect(component.timeConversionForm.get("localTime")?.value).toEqual(date.toLocaleString());
    expect(component.timeConversionForm.get("isoTime")?.value).toEqual(date.toISOString());
    expect(component.timeConversionForm.get("unixTime")?.value).toEqual(unixTime.toString());
  });

  it("should clear the input and output fields when pressed on 'clear' button", () => {
    component.timeConversionForm.get("inputTimestamp")?.setValue(new Date().getTime());
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector("[data-testid='timestamp-input']");
    expect(input.value).toBeTruthy();
    expect(component.timeConversionForm.get("utcTime")?.value).toBeTruthy();
    const clearButton = fixture.nativeElement.querySelector("[data-testid='clear-btn']");
    clearButton.click();
    fixture.detectChanges();
    expect(input.value).toBeFalsy();
    expect(component.timeConversionForm.get("utcTime")?.value).toBeFalsy();
    expect(component.timeConversionForm.get("localTime")?.value).toBeFalsy();
    expect(component.timeConversionForm.get("isoTime")?.value).toBeFalsy();
    expect(component.timeConversionForm.get("unixTime")?.value).toBeFalsy();
  });

  it("should display error message for invalid timestamp", () => {
    component.timeConversionForm.get("inputTimestamp")?.setValue("Invalid");
    fixture.detectChanges();
    expect(component.timeConversionForm.get("utcTime")?.value).toEqual("Invalid Date");
    expect(component.timeConversionForm.get("localTime")?.value).toEqual("Invalid Date");
    expect(component.timeConversionForm.get("isoTime")?.value).toEqual("Invalid Date");
    expect(component.timeConversionForm.get("unixTime")?.value).toEqual("Invalid Date");
  });
});
