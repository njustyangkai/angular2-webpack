import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FullComponent } from './full.component';

const routes:Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'myCourse',
        pathMatch: 'full'
      }
    ]
  }
];

export const fullRouting:ModuleWithProviders = RouterModule.forChild(routes);
