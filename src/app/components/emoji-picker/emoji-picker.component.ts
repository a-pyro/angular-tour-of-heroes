import { Component, EventEmitter, Output } from '@angular/core';
import { EmojiService } from 'src/app/services/emoji.service';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.css'],
})
export class EmojiPickerComponent {
  @Output() emitEmoji = new EventEmitter();

  addEmoji(event: { emoji: { native: string } }) {
    this.emitEmoji.emit(event.emoji.native);
  }
  constructor(protected emojiService: EmojiService) {}

  ngOnDestroy() {
    this.emojiService.closePicker();
  }
}
