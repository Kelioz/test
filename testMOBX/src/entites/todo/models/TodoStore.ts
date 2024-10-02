import { makeAutoObservable } from "mobx";
import {Todo, TodoList } from "../../../shared/api/api";

class TodoStore{
    todoList:TodoList[] = [];
    todo?:Todo;

    constructor(){
        makeAutoObservable(this)
    }

    
}

export default new TodoStore