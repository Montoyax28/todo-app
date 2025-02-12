import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
})
export class AllComponent implements OnInit {
  tareas: any[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((tareas) => {
      this.tareas = tareas;
    });
  }

  cambiarEstado(index: number, completed: boolean) {
    this.taskService.actualizarEstado(index, completed);
  }
}
