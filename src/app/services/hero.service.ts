import { MessagesService } from './messages.service';
import { HEROES } from 'src/app/data/mock-heroes';
import { Hero } from 'src/app/types/hero';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  constructor(
    private messagesService: MessagesService,
    private storageService: LocalStorageService
  ) {}

  getHeroes(): Observable<Hero[]> {
    const storedHeroes = this.storageService.getItem<Hero[]>('heroes');
    if (!storedHeroes) {
      this.storageService.setItem('heroes', this.heroes);
    }
    this.heroes = storedHeroes || this.heroes;
    this.messagesService.add('HeroService: fetched heroes');
    return of(this.heroes);
  }

  getHeroById(id: number): Observable<Hero | undefined> {
    this.messagesService.add(`HeroService: fetched hero id=${id}`);
    return of(this.heroes.find((hero) => hero.id === id));
  }

  saveHeroes() {
    const index = this.heroes.findIndex(
      (hero) => hero.id === this.selectedHero?.id
    );
    if (index === -1) return;
    this.heroes[index] = this.selectedHero as Hero;
    this.storageService.setItem('heroes', this.heroes);
  }

  setHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
