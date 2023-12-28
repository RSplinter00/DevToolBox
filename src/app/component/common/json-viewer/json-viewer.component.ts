import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightJsDirective} from "ngx-highlight-js";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-json-viewer',
  standalone: true,
  imports: [CommonModule, HighlightJsDirective, MatCardModule, MatButtonModule],
  templateUrl: './json-viewer.component.html',
  styleUrl: './json-viewer.component.scss'
})
export class JsonViewerComponent {
  @Input() jsonInput: string | undefined;

  copyToClipboard(): void {
    if (this.jsonInput == null) {
      return;
    }
    navigator.clipboard.writeText(this.jsonInput);
  }
}
