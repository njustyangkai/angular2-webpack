import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { YkComponentsDemoNav } from './yk-components-demo.nav';

const routes:Routes = <Routes>[
  {
    path: 'demo',
    component: YkComponentsDemoNav
  }
];

export const ykComponentsDemoRouting:ModuleWithProviders = RouterModule.forChild(routes);
