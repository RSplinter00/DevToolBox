import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextAreaComponent} from "../../common/text-area/text-area.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {ReadonlyTextAreaComponent} from "../../common/readonly-text-area/readonly-text-area.component";
import {EncodingService} from "../../../service/encoding.service";
import {EncodingOptions} from "../../../model/encoding-options";

@Component({
  selector: 'app-base64-encoder',
  standalone: true,
  imports: [CommonModule, TextAreaComponent, MatGridListModule, ReadonlyTextAreaComponent],
  templateUrl: './base64-encoder.component.html',
  styleUrl: './base64-encoder.component.scss'
})
export class Base64EncoderComponent {
  readonly options: string[] = Object.values(EncodingOptions);

  input: string = "";
  output: string = "";
  selectedOption: string = "";

  constructor(private encodingService: EncodingService) {
  }

  setOptions(selectedOption: string): void {
    this.selectedOption = selectedOption;
    this.transform(this.input);
  }

  transform(input: string): void {
    this.input = input;
    switch (this.selectedOption) {
      case EncodingOptions.ENCODE:
        this.encode(input);
        break;
      case EncodingOptions.DECODE:
        this.decode(input);
        break;
      default:
        this.output = input;
    }
  }

  private encode(input: string): void {
    this.output = this.encodingService.encode(input);
  }

  private decode(input: string): void {
    this.output = this.encodingService.decode(input);
  }
}
