import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmojiService {
  showPicker = false;

  togglePicker() {
    this.showPicker = !this.showPicker;
  }

  closePicker() {
    this.showPicker = false;
  }
}
