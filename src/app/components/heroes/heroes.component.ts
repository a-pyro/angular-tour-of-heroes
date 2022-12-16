import { EmojiService } from './../../services/emoji.service';
import { Component } from '@angular/core';
import { HEROES } from 'src/app/data/mock-heroes';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  constructor(public emojiService: EmojiService) {}

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  changeEmoji(s: string) {
    if (!this.selectedHero) return;
    this.selectedHero.emoji = s;
  }

  ngOnDestroy() {
    this.emojiService.closePicker();
  }
}
