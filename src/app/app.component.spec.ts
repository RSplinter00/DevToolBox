import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.componentInstance;
      });
  }))

  it("should create the app", () => {
    expect(app).toBeTruthy();
  });

  it("should have the 'DevToolBox' title", () => {
    expect(app.title).toEqual("DevToolBox");
  });
});
