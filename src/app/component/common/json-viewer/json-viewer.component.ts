import {Component, Input, OnChanges, OnInit} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HighlightJsDirective} from "ngx-highlight-js";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: "app-json-viewer",
  standalone: true,
  imports: [CommonModule, HighlightJsDirective, MatCardModule, MatButtonModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: "./json-viewer.component.html",
  styleUrls: ["./json-viewer.component.scss", "../../../styles/tools-styles.scss"]
})
export class JsonViewerComponent implements OnChanges, OnInit {
  @Input() jsonInput: object | string | undefined;
  formattedJsonObject: string | undefined;
  spacingControl: FormControl<string | null> = new FormControl<string>("4");

  copyToClipboard(): void {
    if (this.formattedJsonObject == null) {
      return;
    }
    navigator.clipboard.writeText(this.formattedJsonObject);
  }

  ngOnInit() {
    this.spacingControl.valueChanges.subscribe(() => this.stringifyJsonObject());
  }

  ngOnChanges(): void {
    this.stringifyJsonObject();
  }

  private stringifyJsonObject(): void {
    if (this.jsonInput == null) {
      this.formattedJsonObject = "";
      return;
    }
    if (typeof this.jsonInput === "string") {
      this.formattedJsonObject = this.jsonInput as string;
      return;
    }
    const spacing: number = parseInt(this.spacingControl.value || "4");
    this.formattedJsonObject = JSON.stringify(this.jsonInput, null, spacing);
  }
}
