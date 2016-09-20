import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FullComponent } from './full.component';

const routes:Routes = <Routes>[
  {
    path: 'main',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'myCourse'
      }
    ]
  }
];

export const fullRouting:ModuleWithProviders = RouterModule.forChild(routes);

