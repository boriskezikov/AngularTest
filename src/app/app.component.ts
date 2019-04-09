import {Component} from '@angular/core';


const todos = [
  'Изучить JavaScript',
  'Изучить Angular 2',
  'Написать приложение'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'GeneratorFront';
  todos = todos;
}
