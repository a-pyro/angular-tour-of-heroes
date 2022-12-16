import { Component, Input } from '@angular/core';
import { EmojiService } from 'src/app/services/emoji.service';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  constructor(protected emojiService: EmojiService) {}

  changeEmoji(s: string) {
    if (!this.hero) return;
    this.hero.emoji = s;
  }
}
