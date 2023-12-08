import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TextAreaComponent} from './text-area.component';
import {appConfig} from "../../../app.config";

describe(TextAreaComponent.name, () => {
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

  it("should create text are component", () => {
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
});
