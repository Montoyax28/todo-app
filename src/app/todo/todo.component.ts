import { Component } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  get date() {
    return new Date().toDateString();
  }

  mostrarFormulario = false;
  nuevaTarea = { title: '', description: '', time: '', completed: false };

  constructor(private taskService: TaskService) {}

  agregarTarea() {
    if (this.nuevaTarea.title && this.nuevaTarea.time) {
      this.taskService.agregarTarea({ ...this.nuevaTarea });
      this.nuevaTarea = {
        title: '',
        description: '',
        time: '',
        completed: false,
      };
      this.mostrarFormulario = false;
    }
  }
}
