import {ComponentFixture, TestBed} from '@angular/core/testing';

import {NavListComponent} from './nav-list.component';
import {appConfig} from "../../app.config";

describe(NavListComponent.name, () => {
  let component: NavListComponent;
  let fixture: ComponentFixture<NavListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NavListComponent],
      providers: [appConfig.providers]
    }).compileComponents();
    fixture = TestBed.createComponent(NavListComponent);
    fixture.autoDetectChanges();
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display nav items", () => {
    const mockNavItems = [
      {name: "home", link: "/home"},
      {name: "about", link: "/about"}
    ];
    component.navItems = mockNavItems;
    fixture.detectChanges();

    const navList = fixture.nativeElement.querySelector("mat-nav-list");
    const listItems = navList.querySelectorAll("a");
    expect(listItems).toHaveSize(mockNavItems.length);
    mockNavItems.forEach((item, idx) => {
      expect(listItems[idx].textContent).toEqual(item.name);
      expect(listItems[idx].getAttribute("href")).toEqual(item.link);
    });
  });
});
