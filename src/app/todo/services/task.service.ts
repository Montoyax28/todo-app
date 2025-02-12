import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Task {
  title: string;
  description: string;
  time: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasks.asObservable();

  agregarTarea(task: Task) {
    const nuevasTareas = [...this.tasks.value, task];
    this.tasks.next(nuevasTareas);
  }

  actualizarEstado(index: number, completed: boolean) {
    const tareasActuales = this.tasks.value;
    tareasActuales[index].completed = completed;
    this.tasks.next([...tareasActuales]);
  }
}
