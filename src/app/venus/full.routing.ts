import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { FullComponent } from './full.component';
import { MyCourseComponent } from './myCourse/my-course.component';

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
                redirectTo: 'myCourse'
            },
            {
                path: 'myCourse',
                component: MyCourseComponent
            }
        ]
    }
];

export const fullRouting:ModuleWithProviders = RouterModule.forChild(routes);

