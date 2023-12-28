import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HighlightJsModule} from "ngx-highlight-js";
import {MatGridListModule} from "@angular/material/grid-list";
import {TextAreaComponent} from "../../common/text-area/text-area.component";
import {JsonViewerComponent} from "../../common/json-viewer/json-viewer.component";

@Component({
  selector: "app-json-validator",
  standalone: true,
  imports: [CommonModule, HighlightJsModule, MatGridListModule, TextAreaComponent, JsonViewerComponent],
  templateUrl: "./json-validator.component.html",
  styleUrls: ["./json-validator.component.scss", "../../../styles/tools-styles.scss"]
})
export class JsonValidatorComponent {
  formattedJson: string | undefined;

  validateJson(input: string): void {
    if (input == "") {
      this.formattedJson = "";
      return;
    }

    try {
      const jsonObject = JSON.parse(input);
      this.formattedJson = JSON.stringify(jsonObject, null, 2);
    } catch (e) {
      this.formattedJson = (e as SyntaxError).message;
    }
  }
}
