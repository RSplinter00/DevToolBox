import {Component, Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HighlightJsDirective} from "ngx-highlight-js";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: "app-json-viewer",
  standalone: true,
  imports: [CommonModule, HighlightJsDirective, MatCardModule, MatButtonModule],
  templateUrl: "./json-viewer.component.html",
  styleUrls: ["./json-viewer.component.scss", "../../../styles/tools-styles.scss"]
})
export class JsonViewerComponent {
  @Input() jsonInput: string | undefined;

  copyToClipboard(): void {
    if (this.jsonInput != null) {
      navigator.clipboard.writeText(this.jsonInput);
    }
  }
}
