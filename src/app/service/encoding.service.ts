import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncodingService {
  public encode(value: string) {
    return btoa(value);
  }
}
