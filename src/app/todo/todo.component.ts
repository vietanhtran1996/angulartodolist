import { Component } from '@angular/core';
import { TodoItem } from '../model/todoItem';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'
})

export class Todo {
    todoItems: TodoItem[] = [];

    addItem(description: string){
        this.todoItems = [ ...this.todoItems, { id: this.todoItems.length + 1, description, isCompleted: false } ];
    }

    removeItem(toBeRemovedId: number){
        this.todoItems = this.todoItems.filter(({id}) => id !== toBeRemovedId );
    }

    toggleCompletion(todoId: number){
        console.log('todoId', todoId);
        this.todoItems = this.todoItems.map(item => item.id === todoId ? {...item, isCompleted: !item.isCompleted} : item);
        console.log('this.todoItems', this.todoItems);
    }
}