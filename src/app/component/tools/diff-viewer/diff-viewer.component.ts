import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextAreaComponent} from "../../common/text-area/text-area.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {Change, diffChars} from "diff";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-diff-viewer',
  standalone: true,
  imports: [CommonModule, TextAreaComponent, MatGridListModule, MatCardModule],
  templateUrl: './diff-viewer.component.html',
  styleUrl: './diff-viewer.component.scss'
})
export class DiffViewerComponent {
  original: string = "";
  updated: string = "";
  differences!: { text: string, className: string }[];

  setOriginal(original: string): void {
    this.original = original;
    this.compareChanges();
  }

  setUpdated(updated: string): void {
    this.updated = updated;
    this.compareChanges();
  }

  compareChanges(): void {
    const changes: Change[] = diffChars(this.original, this.updated);
    this.differences = changes.map((change: Change) => {
      return {
        text: this.parseText(change.value),
        className: this.getClassName(change)
      }
    });
  }

  private parseText(text: string): string {
    return text.replaceAll("\n", "<br>").replaceAll(" ", "&nbsp;");
  }

  private getClassName(part: Change): string {
    return part.added ? "diff-added" : part.removed ? "diff-removed" : "diff-unchanged";
  }
}