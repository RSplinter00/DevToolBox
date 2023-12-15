import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ReadonlyTextAreaComponent} from './readonly-text-area.component';

describe(ReadonlyTextAreaComponent.name, () => {
  let component: ReadonlyTextAreaComponent;
  let fixture: ComponentFixture<ReadonlyTextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReadonlyTextAreaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReadonlyTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create readonly textarea component", () => {
    expect(component).toBeTruthy();
  });

  it("should display a header div", () => {
    const header = fixture.nativeElement.querySelector(".container .header");
    const headerText = header.querySelector("span");
    expect(headerText.textContent).toEqual("Output:");
  });

  it("should display a textarea", () => {
    const content = fixture.nativeElement.querySelector(".container .content");
    const textarea = content.querySelector("textarea");
    expect(textarea).toBeTruthy();
    expect(textarea.getAttribute("readonly")).toEqual("");
  });

  it("should display the output", () => {
    component.output = "value";
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector(".container .content textarea");
    expect(textarea.value).toEqual("value");
  });
});
