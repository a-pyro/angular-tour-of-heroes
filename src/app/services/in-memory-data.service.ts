import { Hero } from 'src/app/types/hero';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    const heroes: Hero[] = [
      { id: 12, name: 'Dr. Nice', emoji: '🙂' },
      { id: 13, name: 'Bombasto', emoji: '🙂' },
      { id: 14, name: 'Celeritas', emoji: '🙂' },
      { id: 15, name: 'Magneta', emoji: '🙂' },
      { id: 16, name: 'RubberMan', emoji: '🙂' },
      { id: 17, name: 'Dynama', emoji: '🙂' },
      { id: 18, name: 'Dr. IQ', emoji: '🙂' },
      { id: 19, name: 'Magma', emoji: '🙂' },
      { id: 20, name: 'Tornado', emoji: '🙂' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
