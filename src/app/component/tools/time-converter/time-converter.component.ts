import {Component, OnInit} from "@angular/core";
import {CommonModule, DatePipe} from "@angular/common";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {TimeConversionService} from "../../../service/time-conversion.service";

@Component({
  selector: "app-time-converter",
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, ReactiveFormsModule],
  providers: [DatePipe],
  templateUrl: "./time-converter.component.html",
  styleUrl: "./time-converter.component.scss"
})
export class TimeConverterComponent implements OnInit {
  readonly otherDateFormats: string[] = ["yyyy-MM-dd", "yyyy/MM/dd", "MM-dd-yyyy", "MM/dd/yyyy"];

  timeConversionForm: FormGroup = new FormGroup({
    inputTimestamp: new FormControl(),
    utcTime: new FormControl(),
    localTime: new FormControl(),
    isoTime: new FormControl(),
    unixTime: new FormControl(),
  });

  constructor(private timeConversionService: TimeConversionService, private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.timeConversionForm.get("inputTimestamp")?.valueChanges.subscribe((epoch: string) => {
      const date: Date = new Date(parseInt(epoch));
      this.timeConversionForm.get("utcTime")?.setValue(this.timeConversionService.convertToUtcTime(date));
      this.timeConversionForm.get("localTime")?.setValue(this.timeConversionService.convertToLocalTime(date));
      this.timeConversionForm.get("isoTime")?.setValue(this.timeConversionService.convertToISOTime(date));
      this.timeConversionForm.get("unixTime")?.setValue(this.timeConversionService.convertToUnixTime(date));
    });
  }

  setCurrentTime() {
    this.timeConversionForm.get("inputTimestamp")?.setValue(Date.now());
  }

  clearInput() {
    this.timeConversionForm.reset();
  }

  convertUtcToFormat(format: string): string | null {
    try {
      const utcDate = this.timeConversionForm.get("utcTime")?.value;
      if (utcDate == null || utcDate.trim() == "") {
        return "";
      }
      return this.datePipe.transform(utcDate, format);
    } catch (e) {
      return "Invalid Date";
    }
  }
}
