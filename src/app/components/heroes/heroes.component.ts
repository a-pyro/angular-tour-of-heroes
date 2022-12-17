import { Router, RouterModule } from '@angular/router';
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

  constructor(
    protected heroService: HeroService,
    private msgService: MessagesService,
    private router: Router
  ) {}

  onSelect(hero: Hero) {
    this.msgService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.heroService.setHero(hero);
    this.router.navigate(['/heroes/', hero.id]);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  getSelectedHero() {
    return this.heroService.selectedHero;
  }

  ngOnInit() {
    this.getHeroes();
  }
}
