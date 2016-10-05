import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FullComponent } from './full.component';
import { BoxComponent } from './box/box.component';
import { ButtonComponent } from './button/button.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralFormComponent } from './form/general-form.component';

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
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'box',
        component: BoxComponent
      },
      {
        path: 'button',
        component: ButtonComponent
      },
      {
        path: 'form/general',
        component: GeneralFormComponent
      }
    ]
  }
];

export const fullRouting:ModuleWithProviders = RouterModule.forChild(routes);

