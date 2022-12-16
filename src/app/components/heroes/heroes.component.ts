import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(
    private heroService: HeroService,
    private msgService: MessagesService
  ) {}

  onSelect(hero: Hero) {
    this.msgService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.selectedHero = hero;
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  ngOnInit() {
    this.getHeroes();
  }
}
