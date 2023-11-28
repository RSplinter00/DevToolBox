import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';
import {appConfig} from "../../app.config";

describe(FooterComponent.name, () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [appConfig.providers]
    }).compileComponents();
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create footer component", () => {
    expect(component).toBeTruthy();
  });

  it("should divide footer from content", () => {
    const divider = fixture.nativeElement.querySelector("mat-divider");
    expect(divider).toBeTruthy();
  });

  it("should display a link with a Github icon", () => {
    const links = fixture.nativeElement.querySelectorAll("#socials-container a");
    expect(links.length).toBeGreaterThanOrEqual(1);
    expect(links[0].href).toEqual("https://github.com/RSplinter00/DevToolBox");
    expect(links[0].querySelector("i").classList).toContain("fa-github");
  });

  it("should display a link with a LinkedIn icon", () => {
    const links = fixture.nativeElement.querySelectorAll("#socials-container a");
    expect(links.length).toBeGreaterThanOrEqual(2);
    expect(links[1].href).toEqual("https://www.linkedin.com/in/raymond-splinter");
    expect(links[1].querySelector("i").classList).toContain("fa-linkedin");
  });
});
