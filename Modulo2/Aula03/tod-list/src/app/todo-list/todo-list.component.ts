import { Component, } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: string[]= [
    'Atualizar LinkedIn',
    'Tomar água',
    'Ver planos Alura'
  ]
}
