import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ToDo } from '../Model/Todo';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos : ToDo[];

  constructor(private toastr : ToastrService) {
    this.todos = [
      {
        id: "1",
        title: "Learn Angular",
        isCompleted: false,
        date: new Date()
      },
      {
        id: "2",
        title: "Learn Node",
        isCompleted: false,
        date: new Date()
      },
      {
        id: "3",
        title: "Revise Java",
        isCompleted: true,
        date: new Date()
      }
    ];
  }

  //CRUD methods
  addTodo = (todo : ToDo) => {
    this.todos.push(todo);
    this.toastr.success("Added successfully!");
  }

  getTodos = () => {
    //making our Todos as observables since at the time of loading, component might be available before the service loads up
    //so need to wait until service gives us the entire data
    return of(this.todos); 
  }

  updateTodo = (todo : ToDo) => {
    this.todos.forEach( currTodo => {
      if( currTodo.id === todo.id ) {
        currTodo.isCompleted = !currTodo.isCompleted;

        if(currTodo.isCompleted)
          this.toastr.info("Marked as completed!");
        else
          this.toastr.info("Marked as incomplete!")
      }
    });
  }

  deleteTodo = (todo : ToDo) => {
    let index : number = -1;
    for(let i = 0; i < this.todos?.length; ++i) {
      if( this.todos[i].id === todo.id ) {
        index = i;
        break;
      }
    }

    if(index != -1) {
      this.todos.splice(index, 1);
      this.toastr.success("Deleted successfully!");
    }
  }
}
