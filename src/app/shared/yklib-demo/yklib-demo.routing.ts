import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { YklibDemo } from './yklib-demo.main';
import { YkNavDemoComponent } from './yk-nav-demo/yk-nav-demo.component';

const routes:Routes = <Routes>[
  {
    path: 'demo',
    component: YklibDemo,
    children: [
      {
        path: '',
        redirectTo: 'yk-nav'
      },
      {
        path: 'yk-nav',
        component: YkNavDemoComponent
      }
    ]
  }
];

export const yklibDemoRouting:ModuleWithProviders = RouterModule.forChild(routes);
