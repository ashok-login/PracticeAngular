import { TodoItem } from './todo-item.model';

export class TodoModel {
    public user: string;
    public items: TodoItem[];

    constructor() {
        this.user = 'User1';
        this.items = [
            new TodoItem('Learn Angular', false),
            new TodoItem('Revision on Angular', false),
            new TodoItem('Learn Microservices', false),
            new TodoItem('Learn Azure', false)
        ];
    }
}
