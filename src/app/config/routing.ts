import { DashboardComponent } from './../components/dashboard/dashboard.component';
import { HeroDetailComponent } from './../components/hero-detail/hero-detail.component';
import { HeroesComponent } from './../components/heroes/heroes.component';
import { Route, Routes } from '@angular/router';

export interface CustomRoute extends Route {
  path: '' | 'heroes' | 'heroes/:id' | 'dashboard';
}

export const routes: CustomRoute[] = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, //auto navigate to dashboard
  { path: 'heroes', component: HeroesComponent, pathMatch: 'full' },
  { path: 'heroes/:id', component: HeroDetailComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];
