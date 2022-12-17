import { Hero } from './../../types/hero';
import { Component } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private router: Router) {}

  onClick(hero: Hero) {
    this.heroService.setHero(hero);
    this.router.navigate(['/heroes/', hero.id]);
  }

  ngOnInit() {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(0, 4)));
  }
}
