import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { MyCourseComponent } from './my-course.component';

const routes:Routes = [
  {
    path: 'myCourse',
    component: MyCourseComponent
  }
];

export const myCourseRouting:ModuleWithProviders = RouterModule.forChild(routes);

