import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'cats',
    loadComponent: () => import('./cats-page/cats-page.component').then(c => c.CatsPageComponent)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'cats'
  }
];
