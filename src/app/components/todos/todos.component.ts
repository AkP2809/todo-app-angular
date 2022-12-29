import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import {ToDo} from "../../Model/Todo"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  todos ?: ToDo[];

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  changeTodoStatus = (todo : ToDo) => {
    this.todoService.updateTodo(todo);
  }

  deleteTodo = (todo : ToDo) => {
    this.todoService.deleteTodo(todo);
  }
}
