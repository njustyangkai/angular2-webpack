import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes:Routes = [
  {
    path: '',
    redirectTo: 'myCourse',
    pathMatch: 'full'
  },
  {
    path: 'ykComponentsDemo',
    loadChildren: './shared/yk-components-demo/yk-components-demo.module'
  }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(routes);

