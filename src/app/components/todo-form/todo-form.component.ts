import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/Model/Todo';
import { TodoService } from 'src/app/service/todo.service';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title : string = "";

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
  }

  addTodo = () => {
    const newTodo = {
      id: uuidv4(),
      title: this.title,
      isCompleted: false,
      date: new Date(),
    };

    this.todoService.addTodo(newTodo);
    this.title = ""; //flushing out the input form field
  }
}
