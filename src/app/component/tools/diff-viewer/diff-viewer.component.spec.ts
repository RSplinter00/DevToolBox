import {ComponentFixture, TestBed} from "@angular/core/testing";

import {DiffViewerComponent} from "./diff-viewer.component";

describe(DiffViewerComponent.name, () => {
  let component: DiffViewerComponent;
  let fixture: ComponentFixture<DiffViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DiffViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DiffViewerComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });

  it("should create diff viewer component", () => {
    expect(component).toBeTruthy();
  });

  it("should show two input text areas and an output field", () => {
    const textAreas = fixture.nativeElement.querySelectorAll("app-text-area");
    const outputField = fixture.nativeElement.querySelector("#output-viewport mat-card");
    expect(textAreas.length).toBe(2);
    const headerOriginal = textAreas[0].querySelector(".section-header .section-title");
    const headerUpdated = textAreas[1].querySelector(".section-header .section-title");
    expect(headerOriginal.textContent).toEqual("Original:");
    expect(headerUpdated.textContent).toEqual("Updated:");
    expect(outputField).toBeTruthy();
  });

  it("should show the differences of two strings", () => {
    component.setOriginal("Hello World");
    component.setUpdated("Hello\nWorld!");
    fixture.detectChanges();
    expect(component.changes.length).toBe(5);
    expect(component.changes[0].text).toEqual("Hello");
    expect(component.changes[0].className).toEqual("diff-unchanged");
    expect(component.changes[1].text).toEqual("&nbsp;");
    expect(component.changes[1].className).toEqual("diff-removed");
    expect(component.changes[2].text).toEqual("<br>");
    expect(component.changes[2].className).toEqual("diff-added");
    expect(component.changes[3].text).toEqual("World");
    expect(component.changes[3].className).toEqual("diff-unchanged");
    expect(component.changes[4].text).toEqual("!");
    expect(component.changes[4].className).toEqual("diff-added");
  });
});
