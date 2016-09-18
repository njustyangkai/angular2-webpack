import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { YkComponentsDemoNav } from './yk-components-demo.nav';

const routes:Routes = [
  {
    path: 'ykComponentsDemo',
    component: YkComponentsDemoNav
  }
];

export const ykComponentsDemoRouting:ModuleWithProviders = RouterModule.forChild(routes);
