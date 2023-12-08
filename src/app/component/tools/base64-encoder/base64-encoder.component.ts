import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextAreaComponent} from "../../common/text-area/text-area.component";
import {MatGridListModule} from "@angular/material/grid-list";

@Component({
  selector: 'app-base64-encoder',
  standalone: true,
  imports: [CommonModule, TextAreaComponent, MatGridListModule],
  templateUrl: './base64-encoder.component.html',
  styleUrl: './base64-encoder.component.scss'
})
export class Base64EncoderComponent {

}
