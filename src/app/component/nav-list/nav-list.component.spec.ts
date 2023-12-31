import {ComponentFixture, fakeAsync, TestBed, tick} from "@angular/core/testing";

import {NavListComponent} from "./nav-list.component";
import {provideRouter, Router} from "@angular/router";
import {NavListItem} from "../../model/nav-list-item";
import {By} from "@angular/platform-browser";
import {routes} from "../../app.routes";
import {DebugElement} from "@angular/core";

describe(NavListComponent.name, () => {
  let component: NavListComponent;
  let fixture: ComponentFixture<NavListComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavListComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(NavListComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
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
    expect(listItems[0].getAttribute("target")).toEqual("_blank");
    expect(listItems[0].getAttribute("rel")).toEqual("noreferrer noopener");
  });

  it("should display nav items", () => {
    const mockNavItems: NavListItem[] = [
      {name: "home", path: "home"},
      {name: "about", path: "about"}
    ];
    component.navItems = mockNavItems;
    fixture.detectChanges();

    const navList = fixture.nativeElement.querySelector("mat-nav-list");
    const listItems = navList.querySelectorAll("a");
    expect(listItems).toHaveSize(mockNavItems.length + 1);
    mockNavItems.forEach((item: NavListItem, idx: number) => {
      expect(listItems[idx + 1].textContent.trim()).toEqual(item.name);
      expect(listItems[idx + 1].getAttribute("href")).toEqual("/tools/" + item.path);
    });
  });

  it("should display active nav  item", fakeAsync(() => {
    router.navigate(["/tools/base64-encoder"]);
    tick();
    const activeLinks: DebugElement[] = fixture.debugElement.queryAll(By.css(".active"));
    expect(activeLinks).toHaveSize(1);
  }));
});
