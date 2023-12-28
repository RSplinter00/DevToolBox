import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HighlightJsDirective} from "ngx-highlight-js";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: "app-json-viewer",
  standalone: true,
  imports: [CommonModule, HighlightJsDirective, MatCardModule, MatButtonModule, CdkFixedSizeVirtualScroll, CdkVirtualScrollViewport],
  templateUrl: "./json-viewer.component.html",
  styleUrls: ["./json-viewer.component.scss", "../../../styles/tools-styles.scss"]
})
export class JsonViewerComponent implements OnChanges {
  @Input() jsonInput: Object | string | undefined;
  formattedJsonObject: string | undefined;

  copyToClipboard(): void {
    if (this.formattedJsonObject != null) {
      navigator.clipboard.writeText(this.formattedJsonObject);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.hasOwnProperty("jsonInput")) {
      this.formattedJsonObject = this.stringifyJson(this.jsonInput == null ? "" : this.jsonInput);
    }
  }

  private stringifyJson(jsonObject: object | string): string {
    if (typeof jsonObject === "string") {
      return jsonObject as string;
    }
    return JSON.stringify(jsonObject, null, 2);
  }
}
