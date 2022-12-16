import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { EmojiPickerComponent } from './components/emoji-picker/emoji-picker.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [AppComponent, HeroesComponent, EmojiPickerComponent, HeroDetailComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, PickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
