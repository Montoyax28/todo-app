import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';

import { AllComponent } from './pages/all/all.component';
import { ClosedComponent } from './pages/closed/closed.component';
import { OpenComponent } from './pages/open/open.component';
import { TodoComponent } from './todo.component';

@NgModule({
  declarations: [TodoComponent, AllComponent, OpenComponent, ClosedComponent],
  imports: [CommonModule, TodoRoutingModule, FormsModule],
  exports: [TodoComponent, AllComponent, OpenComponent, ClosedComponent],
})
export class TodoModule {}
