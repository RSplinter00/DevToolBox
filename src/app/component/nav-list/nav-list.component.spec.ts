import {ComponentFixture, TestBed} from "@angular/core/testing";

import {NavListComponent} from "./nav-list.component";
import {provideRouter} from "@angular/router";

describe(NavListComponent.name, () => {
  let component: NavListComponent;
  let fixture: ComponentFixture<NavListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavListComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(NavListComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
  });

  it("should create navList component", () => {
    expect(component).toBeTruthy();
  });

  it("should contain link to github page in navbar", () => {
    const navList = fixture.nativeElement.querySelector("mat-nav-list");
    const listItems = navList.querySelectorAll("a");

    expect(listItems.length).toBeGreaterThanOrEqual(1);
    expect(listItems[0].href).toEqual("https://github.com/RSplinter00/DevToolBox");
    expect(listItems[0].textContent).toContain("Support on Github");
    expect(listItems[0].querySelector("mat-icon").textContent).toEqual("star");
  });

  it("should display nav items", () => {
    const mockNavItems: { name: string, link: string, tag: string }[] = [
      {name: "home", link: "/home", tag: "home"},
      {name: "about", link: "/about", tag: "about"}
    ];
    component.navItems = mockNavItems;
    fixture.detectChanges();

    const navList = fixture.nativeElement.querySelector("mat-nav-list");
    const listItems = navList.querySelectorAll("a");
    expect(listItems).toHaveSize(mockNavItems.length + 1);
    mockNavItems.forEach((item: { name: string, link: string }, idx: number) => {
      expect(listItems[idx + 1].textContent).toEqual(item.name);
      expect(listItems[idx + 1].getAttribute("href")).toEqual(item.link);
    });
  });
});
