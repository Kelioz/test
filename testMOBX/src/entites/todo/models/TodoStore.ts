import { makeAutoObservable } from "mobx";
import { ArrayOfUsers, getUsers, Todo, TodoList } from "../../../shared/api/api";

class TodoStore{
    todoList:TodoList[] = [];
    todo?:Todo;
    users?:ArrayOfUsers


    constructor(){
        makeAutoObservable(this)
    }

    getUserList = async() =>{
        try{
            const {data} = await getUsers()
            this.users = data
            
        }catch{

        }

    }
    
}

export default new TodoStore