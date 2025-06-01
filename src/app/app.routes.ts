import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Volunteers } from './volunteers/volunteers';
import { Events } from './events/events';
import { Donations } from './donations/donations';
import { Tasks } from './tasks/tasks';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', component: Dashboard },
      { path: 'volunteers', component: Volunteers },
      { path: 'events', component: Events },
      { path: 'donations', component: Donations },
      { path: 'tasks', component: Tasks }
    ]
  }
];
