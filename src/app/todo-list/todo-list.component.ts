import {Component} from '@angular/core';
import {Itodo} from '../shared/todo';
import {todos} from '../shared/data';

@Component({
  moduleId: module.id,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
 todos: Itodo[] = todos;

  toggle(todo: Itodo) {
    todo.completed = !todo.completed;
  }

  delete(todo: Itodo) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}

