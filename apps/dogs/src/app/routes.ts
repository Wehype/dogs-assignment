import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'dogs',
    loadChildren: () =>
      import('@dogs/dogs/feature-dogs').then((m) => m.DogsFeatureDogsModule),
  },
  {
    path: '',
    redirectTo: 'dogs',
    pathMatch: 'full',
  },
];
