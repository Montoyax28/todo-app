import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllComponent } from './pages/all/all.component';
import { ClosedComponent } from './pages/closed/closed.component';
import { OpenComponent } from './pages/open/open.component';
import { TodoComponent } from './todo.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      { path: 'all', component: AllComponent },
      { path: 'closed', component: ClosedComponent },
      { path: 'open', component: OpenComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}
