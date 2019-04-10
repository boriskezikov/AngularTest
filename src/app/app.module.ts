import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TodoFormComponent} from './todo-form/todo-form.component';
import {TodoListComponent} from './todo-list/todo-list.component';
import {AppItemComponent} from './app-item/app-item.component';
import {TodoService} from './todo-service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    AppItemComponent,
  ],
  providers: [TodoService],
  imports: [
    BrowserModule, FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
