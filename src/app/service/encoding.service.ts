import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class EncodingService {
  public encode(value: string): string {
    return btoa(value);
  }

  public decode(value: string): string {
    return atob(value);
  }

  public urlEncode(value: string): string {
    return encodeURIComponent(value);
  }

  public urlDecode(value: string): string {
    return decodeURIComponent(value);
  }
}
