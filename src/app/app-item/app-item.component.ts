import { Component} from '@angular/core';
import {Itodo} from '../shared/todo';

@Component({
  moduleId: module.id,
  selector: 'app-item',
  templateUrl: './app-item.component.html',
  styleUrls: ['./app-item.component.css']
})
export class AppItemComponent{
  todo: Itodo  = new Itodo('New header');



}
