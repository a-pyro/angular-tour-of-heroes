import { Component } from '@angular/core';
import { Hero } from 'src/app/types/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent {
  hero: Hero = { name: 'Windstorm', id: 1 };
}
