import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FullComponent } from './full.component';
import { BoxComponent } from './box/box.component';

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
                redirectTo: 'box'
            },
            {
                path: 'box',
                component: BoxComponent
            }
        ]
    }
];

export const fullRouting:ModuleWithProviders = RouterModule.forChild(routes);

