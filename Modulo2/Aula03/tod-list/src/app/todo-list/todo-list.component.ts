import { Component, } from '@angular/core';
import { TodoItem } from './todo-item'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  tasks: TodoItem[] = [
    { description: 'Atualizar LinkedIn', done: false },
    { description: 'Tarefas Bootcamp', done: false },
    { description: 'Pesquisar preços Alura', done: false }
  ]

  addTask(description: string) {
    if (description != ""){
      this.tasks.push({
        description: description,
        done: false
      })
    }
  }

  deleteTask(i: number) {
    this.tasks.splice(i,1);
  }

}
