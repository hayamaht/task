import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  host = 'http://localhost:3000/api';

  #http = inject(HttpClient);

  getTasks() {
    return this.#http.get(`${this.host}/tasks`);
  }

  addTask(todo: string) {
    return this.#http.post(`${this.host}/tasks`, {
      name: todo,
      completed: false,
    });
  }

  deleteTask(id: number) {
    return this.#http.delete(`${this.host}/tasks/${id}`);
  }
}
