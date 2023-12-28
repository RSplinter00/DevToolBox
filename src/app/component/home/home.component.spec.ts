import {ComponentFixture, TestBed} from "@angular/core/testing";

import {HomeComponent} from "./home.component";

describe(HomeComponent.name, () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create home component", () => {
    expect(component).toBeTruthy();
  });

  it("should display a title", () => {
    const title = fixture.nativeElement.querySelector("h1");
    expect(title.textContent).toEqual("Developer's Toolbox");
  });

  it("should display a description", () => {
    const description = fixture.nativeElement.querySelector("#description");
    expect(description.textContent).toContain("A one-in-all website for all your common development tools.");
    expect(description.textContent).toContain("Check out all of our tools!");
  });

  it("should display a footer", () => {
    const footer = fixture.nativeElement.querySelector("app-footer");
    expect(footer).toBeTruthy();
  });
});
