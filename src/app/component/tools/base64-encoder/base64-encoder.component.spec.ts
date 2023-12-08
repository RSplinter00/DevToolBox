import {ComponentFixture, TestBed} from '@angular/core/testing';

import {Base64EncoderComponent} from './base64-encoder.component';
import {appConfig} from "../../../app.config";

describe(Base64EncoderComponent.name, () => {
  let component: Base64EncoderComponent;
  let fixture: ComponentFixture<Base64EncoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Base64EncoderComponent],
      providers: [appConfig.providers]
    }).compileComponents();

    fixture = TestBed.createComponent(Base64EncoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create base64 encoder component", () => {
    expect(component).toBeTruthy();
  });

  it("should show an input text area", () => {
    const gridTiles = fixture.nativeElement.querySelectorAll("mat-grid-list mat-grid-tile");
    const textArea = gridTiles[0].querySelector(".input app-text-area");
    expect(textArea).toBeTruthy();
  });
});
