import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { HeroDetailComponent } from './../components/hero-detail/hero-detail.component';
import { HeroesComponent } from './../components/heroes/heroes.component';
import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: 'heroes', component: HeroesComponent, pathMatch: 'full' },
  { path: 'heroes/:id', component: HeroDetailComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];
