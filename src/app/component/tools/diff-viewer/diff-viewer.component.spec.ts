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
    const outputField = fixture.nativeElement.querySelector("#diff-view mat-card");
    expect(textAreas.length).toBe(2);
    const headerOriginal = textAreas[0].querySelector(".header span");
    const headerUpdated = textAreas[1].querySelector(".header span");
    expect(headerOriginal.textContent).toEqual("Original:");
    expect(headerUpdated.textContent).toEqual("Updated:");
    expect(outputField).toBeTruthy();
  });

  it("should show the differences of two strings", () => {
    component.setOriginal("Hello World");
    component.setUpdated("Hello\nWorld!");
    fixture.detectChanges();
    const diffContent = fixture.nativeElement.querySelector("#diff-view mat-card mat-card-content");
    const elements: HTMLSpanElement[] = [...diffContent.children];
    expect(elements.length).toBe(5);
    expect(elements[0].innerHTML).toEqual("Hello");
    expect(elements[0].className).toEqual("diff-unchanged");
    expect(elements[1].innerHTML).toEqual("&nbsp;");
    expect(elements[1].className).toEqual("diff-removed");
    expect(elements[2].innerHTML).toEqual("<br>");
    expect(elements[2].className).toEqual("diff-added");
    expect(elements[3].innerHTML).toEqual("World");
    expect(elements[3].className).toEqual("diff-unchanged");
    expect(elements[4].innerHTML).toEqual("!");
    expect(elements[4].className).toEqual("diff-added");
  });
});
