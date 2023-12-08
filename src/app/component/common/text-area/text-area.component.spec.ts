import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextAreaComponent} from './text-area.component';
import {appConfig} from "../../../app.config";

describe(TextAreaComponent.name, () => {
  const emitInputParameters: { input: string | null, expectedValue: string }[] = [
    {input: "value", expectedValue: "value"},
    {input: null, expectedValue: ""}
  ];

  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaComponent],
      providers: [appConfig.providers]
    }).compileComponents();

    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create textarea component", () => {
    expect(component).toBeTruthy();
  });

  it("should display a header div", () => {
    const header = fixture.nativeElement.querySelector(".container .header");
    const headerText = header.querySelector("span");
    const button = header.querySelector("button");
    expect(headerText.textContent).toEqual("Input:");
    expect(button.textContent).toEqual("Clear");
  });

  it("should display a textarea", () => {
    const content = fixture.nativeElement.querySelector(".container .content");
    const textarea = content.querySelector("textarea");
    expect(textarea).toBeTruthy();
  });

  emitInputParameters.forEach(parameter => {
    it(`should emit '${parameter.expectedValue}' on input changed`, () => {
      spyOn(component.inputChanged, "emit").and.callFake(
        (value: string) => expect(value).toEqual(parameter.expectedValue));
      component.input.setValue(parameter.input);
      expect(component.inputChanged.emit).toHaveBeenCalledWith(parameter.expectedValue);
    });
  });

  it("should clear the input on clear button pressed", () => {
    spyOn(component.inputChanged, "emit");
    component.input.setValue("Value");
    const button = fixture.nativeElement.querySelector(".container .header button");
    button.click();
    const textarea = fixture.nativeElement.querySelector(".container .content textarea");
    expect(textarea.textContent).toEqual("");
    expect(component.inputChanged.emit).toHaveBeenCalledWith("");
  });
});
