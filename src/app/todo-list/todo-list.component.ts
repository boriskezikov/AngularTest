import {Component, OnInit} from '@angular/core';
import {Itodo} from '../shared/todo';
import {TodoService} from '../todo-service/todo.service';

@Component({
  moduleId: module.id,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Itodo[];

  constructor(private todoService: TodoService) {
    this.todos = [];

   }

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  delete(todo: Itodo) {
    this.todoService.deleteTodo(todo);
  }
  toggle(todo: Itodo) {
    this.todoService.toggleTodo(todo);
  }
}

