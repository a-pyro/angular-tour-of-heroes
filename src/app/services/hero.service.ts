import { Hero } from 'src/app/types/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes: Hero[] = []

  constructor() { }

 

  getHeroes(): Hero[] {
    return this.heroes;
  }

  addHero(hero: Hero): Hero[] {
    this.heroes.push(hero)
    return this.heroes
  }
}
