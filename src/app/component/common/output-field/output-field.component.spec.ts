import {ComponentFixture, TestBed} from "@angular/core/testing";

import {OutputFieldComponent} from "./output-field.component";
import {provideNoopAnimations} from "@angular/platform-browser/animations";
import {ClipboardModule} from "ngx-clipboard";

describe(OutputFieldComponent.name, () => {
  let component: OutputFieldComponent;
  let fixture: ComponentFixture<OutputFieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OutputFieldComponent, ClipboardModule],
      providers: [provideNoopAnimations(), Clipboard]
    }).compileComponents();

    fixture = TestBed.createComponent(OutputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create Output Field component", () => {
    expect(component).toBeTruthy();
  });

  it("should display given label and input value", () => {
    component.label = "Label";
    component.value = "Value";
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector("label");
    const input = fixture.nativeElement.querySelector("input");
    expect(label.textContent).toContain("Label");
    expect(input.value).toContain("Value");
  });
});
