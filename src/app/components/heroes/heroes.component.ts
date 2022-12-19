import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(protected heroService: HeroService, private router: Router) {}

  onSelect(hero: Hero) {
    this.router.navigate(['/heroes/', hero.id]);
  }

  getHeroes() {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(hero: Hero) {
    this.heroService.addHero(hero).subscribe((h) => this.heroes.push(h));
  }

  ngOnInit() {
    this.getHeroes();
  }
}
