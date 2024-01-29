import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TimeConversionService {
  convertToUtcTime(date: Date): string {
    return !isNaN(date.getTime()) ? date.toUTCString() : "Invalid Date";
  }

  convertToLocalTime(date: Date): string {
    return !isNaN(date.getTime()) ? date.toLocaleString() : "Invalid Date";
  }

  convertToUnixTime(date: Date): string {
    return !isNaN(date.getTime()) ? Math.floor(date.getTime() / 1000).toString() : "Invalid Date";
  }

  convertToISOTime(date: Date): string {
    return !isNaN(date.getTime()) ? date.toISOString() : "Invalid Date";
  }
}
