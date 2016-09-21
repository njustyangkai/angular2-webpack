import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { YklibDemo } from './yklib-demo.main.ts';

const routes:Routes = <Routes>[
  {
    path: 'demo',
    component: YklibDemo
  }
];

export const yklibDemoRouting:ModuleWithProviders = RouterModule.forChild(routes);
