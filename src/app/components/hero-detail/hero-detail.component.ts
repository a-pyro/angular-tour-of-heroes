import { Hero } from 'src/app/types/hero';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmojiService } from 'src/app/services/emoji.service';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  hero?: Hero;
  constructor(
    protected emojiService: EmojiService,
    protected heroService: HeroService,
    private location: Location,
    private currentRoute: ActivatedRoute
  ) {}

  changeEmoji(s: string) {
    if (!this.heroService.selectedHero) return;
    this.heroService.selectedHero.emoji = s;
    this.heroService.saveHeroes();
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    const id = this.currentRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (!id) return;
    this.heroService.getHeroById(+id).subscribe((hero) => {
      this.hero = hero;
      console.log(hero?.name);
      console.log(this.hero?.name);
    });
  }
}
