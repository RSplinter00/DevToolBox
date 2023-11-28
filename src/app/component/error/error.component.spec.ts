import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ErrorComponent} from './error.component';
import {appConfig} from "../../app.config";

describe(ErrorComponent.name, () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ErrorComponent],
      providers: [appConfig.providers]
    }).compileComponents();
    fixture = TestBed.createComponent(ErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create error component", () => {
    expect(component).toBeTruthy();
  });

  it("should display an error message", () => {
    const title = fixture.nativeElement.querySelector("h1");
    const errorMessage = fixture.nativeElement.querySelector("p");
    expect(title.textContent).toEqual("404");
    expect(errorMessage.textContent).toEqual("Unable to find the page")
  });

  it("should display buttons to redirect the user", () => {
    const buttons = fixture.nativeElement.querySelectorAll("#redirects-container button");
    expect(buttons[0].textContent).toEqual("Home");
    expect(buttons[0].getAttribute("routerlink")).toEqual("/");
    expect(buttons[1].textContent).toEqual("Tools");
    expect(buttons[1].getAttribute("routerlink")).toEqual("/base64-encoder");
  });

  it("should display a footer", () => {
    const footer = fixture.nativeElement.querySelector("app-footer");
    expect(footer).toBeTruthy();
  });
});
