import { Component, OnInit } from '@angular/core';
import { TodoModel } from '../_model/todo-model.model';
import { stringify } from 'querystring';
import { TodoItem } from '../_model/todo-item.model';

@Component({
  selector: 'app-revision1',
  templateUrl: './revision1.component.html',
  styleUrls: ['./revision1.component.css']
})
export class Revision1Component implements OnInit {
  protected todoModel: TodoModel;
  protected actionItem: string;
  constructor() { }

  ngOnInit() {
    this.todoModel = new TodoModel();
  }

  getName(): string {
    return this.todoModel.user;
  }

  getTaskItems(): TodoItem[] {
    return this.todoModel.items.filter(x => !x.done);
  }

  add(taskItem: string): void {
    this.todoModel.items.push(new TodoItem(taskItem, false));
  }
}
