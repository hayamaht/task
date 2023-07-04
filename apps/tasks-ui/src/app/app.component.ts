import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TasksService } from './services/tasks.service';

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

@Component({
  standalone: true,
  imports: [RouterModule,FormsModule,CommonModule],
  selector: 'task-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks!: Task[];
  task!: string;

  #tasksService = inject(TasksService);

  ngOnInit(): void {
    this.#tasksService.getTasks().subscribe(data => {
      console.log(data);
      this.tasks = data as Task[];
    });
  }

  addTask(task: string) {
    this.#tasksService.addTask(task).subscribe(data => {
      console.log(data);
      this.tasks = data as Task[];
    });
    this.task = '';
  }

  deleteTask(id: number) {
    this.#tasksService.deleteTask(id).subscribe(data => {
      console.log(data);
      this.tasks = data as Task[];
    });
  }
}
