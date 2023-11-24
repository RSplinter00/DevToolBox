import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SidenavComponent} from './sidenav.component';
import {provideNoopAnimations} from "@angular/platform-browser/animations";

describe(SidenavComponent.name, () => {
  let fixture: ComponentFixture<SidenavComponent>;
  let component: SidenavComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SidenavComponent],
      providers: [
        provideNoopAnimations()
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
