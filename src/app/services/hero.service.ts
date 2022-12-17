import { MessagesService } from './messages.service';
import { HEROES } from 'src/app/data/mock-heroes';
import { Hero } from 'src/app/types/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  constructor(private messagesService: MessagesService) {}

  getHeroes(): Observable<Hero[]> {
    this.messagesService.add('HeroService: fetched heroes');
    return of(this.heroes);
  }

  getHeroById(id: number): Observable<Hero | undefined> {
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(this.heroes.find((hero) => hero.id === id));
  }

  setHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
