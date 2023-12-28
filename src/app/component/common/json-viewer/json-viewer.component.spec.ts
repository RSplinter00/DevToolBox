import {ComponentFixture, TestBed} from "@angular/core/testing";

import {JsonViewerComponent} from "./json-viewer.component";

describe(JsonViewerComponent.name, () => {
  let component: JsonViewerComponent;
  let fixture: ComponentFixture<JsonViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [JsonViewerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(JsonViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create JSON Viewer component", () => {
    expect(component).toBeTruthy();
  });

  it("should display a header div", () => {
    const header = fixture.nativeElement.querySelector(".container .header");
    const headerText = header.querySelector("span");
    const copyButton = header.querySelector("[data-testid='copy-btn']");
    expect(headerText.textContent).toEqual("Output:");
    expect(copyButton).toBeTruthy();
  });

  it("should display a textarea to highlight json content", () => {
    const content = fixture.nativeElement.querySelector(".container .content");
    const textarea = content.querySelector("mat-card mat-card-content textarea")
    expect(textarea).toBeTruthy();
    expect(textarea.getAttribute("highlight-js")).toEqual("");
    expect(textarea.getAttribute("ng-reflect-lang")).toEqual("json");
  });

  it("should display the output", () => {
    component.jsonInput = JSON.stringify({"name": "John Doe"});
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector("textarea");
    expect(textarea.value).toEqual('{"name":"John Doe"}');
  });

  it("should copy the output on button click", () => {
    spyOn(window.navigator.clipboard, "writeText");
    component.jsonInput = JSON.stringify({"name": "John Doe"});
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector("[data-testid='copy-btn']");
    button.click();
    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith('{"name":"John Doe"}');
  });

  it("should not copy the output on button click if output is undefined", () => {
    spyOn(window.navigator.clipboard, "writeText");
    component.jsonInput = undefined;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector("[data-testid='copy-btn']");
    button.click();
    expect(window.navigator.clipboard.writeText).not.toHaveBeenCalled();
  });
});
