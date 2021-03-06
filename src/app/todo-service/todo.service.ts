import {todos} from '../shared/data';
import {Itodo} from '../shared/todo';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {
  todos: Itodo[] = todos;
  constructor(private http: HttpClient) {
  }

  getTodos(): Itodo[] {
    return this.todos;
  }

  createTodo(title: string) {
    const todo = new Itodo(title);
    this.todos.push(todo);

  }

  deleteTodo(todo: Itodo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  toggleTodo(todo: Itodo) {
    todo.completed = !todo.completed;
  }
}
