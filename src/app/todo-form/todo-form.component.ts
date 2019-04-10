import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoService} from '../todo-service/todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  title = '';
  constructor(private todoService: TodoService) {
  }
  onSubmit() {
    this.todoService.createTodo(this.title);
  }
}
