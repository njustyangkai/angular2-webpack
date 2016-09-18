import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes:Routes = [
  {
    path: '',
    redirectTo: 'myCourse',
    pathMatch: 'full'
  }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);

