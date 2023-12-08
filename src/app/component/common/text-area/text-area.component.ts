import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {FormControl, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [CommonModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss'
})
export class TextAreaComponent implements OnInit {
  @Output() inputChanged: EventEmitter<string> = new EventEmitter<string>();
  input: FormControl<string | null> = new FormControl<string>("");

  clearInput() {
    this.input.setValue("");
  }

  ngOnInit() {
    this.input.valueChanges.subscribe(value => this.inputChanged.emit(value || ""));
  }
}
