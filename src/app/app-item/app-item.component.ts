import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Itodo} from '../shared/todo';

@Component({
  moduleId: module.id,
  selector: 'app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.css']
})

export class AppItemComponent {
  @Input() todo: Itodo;
  @Output() delete = new EventEmitter();
  @Output() toggle = new EventEmitter();

  onToggle() {
    this.toggle.emit(this.todo);
  }

  onDelete() {
    this.delete.emit(this.todo);
  }
}
