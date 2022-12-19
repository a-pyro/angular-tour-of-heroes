import { Hero } from 'src/app/types/hero';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
})
export class AddHeroComponent {
  localHero: Hero = { name: '', emoji: '' };

  @Output() heroEmit = new EventEmitter<Hero>();

  emitHero(hero: Hero) {
    if (!this.localHero.name) {
      alert('Please enter a name');
      return;
    }
    this.heroEmit.emit(hero);
    this.localHero = { name: '', emoji: '' };
  }
}
