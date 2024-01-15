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

  it("should populate the output fields when input field is changed", () => {
    const date: Date = new Date(2024, 1, 1);
    component.timeConversionForm.get("inputTimestamp")?.setValue(date.getTime());
    fixture.detectChanges();
    const utcOutput = fixture.nativeElement.querySelector("[data-testid='utc-output']");
    const localOutput = fixture.nativeElement.querySelector("[data-testid='local-output']");
    const isoOutput = fixture.nativeElement.querySelector("[data-testid='iso-output']");
    const unixOutput = fixture.nativeElement.querySelector("[data-testid='unix-output']");
    const weekOfYearOutput = fixture.nativeElement.querySelector("[data-testid='week-of-year-output']");
    const dayOfWeekOutput = fixture.nativeElement.querySelector("[data-testid='day-of-week-output']");
    expect(utcOutput.value).toEqual(date.toUTCString());
    expect(localOutput.value).toEqual(date.toLocaleString());
    expect(isoOutput.value).toEqual(date.toISOString());
    expect(unixOutput.value).toEqual((date.getTime() / 1000).toString());
    expect(weekOfYearOutput.value).toEqual("5");
    expect(dayOfWeekOutput.value).toEqual("Thursday");
  });

  it("should clear the input and output fields when pressed on 'clear' button", () => {
    component.timeConversionForm.get("inputTimestamp")?.setValue(new Date().getTime());
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector("[data-testid='timestamp-input']");
    const utcOutput = fixture.nativeElement.querySelector("[data-testid='utc-output']");
    expect(input.value).toBeTruthy();
    expect(utcOutput.value).toBeTruthy();
    const clearButton = fixture.nativeElement.querySelector("[data-testid='clear-btn']");
    clearButton.click();
    fixture.detectChanges();
    expect(input.value).toBeFalsy();
    expect(utcOutput.value).toBeFalsy();
  });

  it("should display error message for invalid timestamp", () => {
    component.timeConversionForm.get("inputTimestamp")?.setValue("Invalid");
    fixture.detectChanges();
    const utcOutput = fixture.nativeElement.querySelector("[data-testid='utc-output']");
    expect(utcOutput.value).toEqual("Invalid Date");
  });
});
