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
  protected hero?: Hero;
  constructor(
    protected emojiService: EmojiService,
    protected heroService: HeroService,
    private location: Location,
    private currentRoute: ActivatedRoute
  ) {}

  changeEmoji(s: string) {
    if (!this.hero) return;
    this.hero.emoji = s;
  }

  goBack() {
    this.location.back();
  }

  save() {
    if (!this.hero) return;
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
  }

  ngOnInit() {
    const id = this.currentRoute.snapshot.paramMap.get('id');
    console.log(id);
    if (!id) return;
    this.heroService.getHero(+id).subscribe((hero) => {
      this.hero = hero;
    });
  }
}
