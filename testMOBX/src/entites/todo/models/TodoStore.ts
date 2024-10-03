import { makeAutoObservable, runInAction } from "mobx";
import {deleteUsersUserIdTodoListsTodoListId, getUsersUserIdTodoLists, postUsersUserIdTodoLists, putUsersUserIdTodoListsTodoListId, Todo, TodoList } from "../../../shared/api/api";

class TodoStore{
    todoList:TodoList[] = [];
    todo?:Todo;
    loading:boolean = false

    constructor(){
        makeAutoObservable(this)
    }
    

    getTodoList = async (id:string) => {
        this.loading = true;
        try {
            const { data } = await getUsersUserIdTodoLists(id);

            runInAction(() => {
                this.todoList = data?.results || [];
            });
        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при получении списка Todolist', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    addTodoList = async (id:string, title:string) =>{
        this.loading = true;

        try {
            await postUsersUserIdTodoLists(id, {title:`${title}`})
            
        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при добавлении списка Todolist')
        }finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    }
    removeTodoList = async (uId:string, lId:string) =>{
        this.loading = true;
        try {
            await deleteUsersUserIdTodoListsTodoListId(uId,lId)
        } catch (error) {
            if(error instanceof Error) console.log('Ошибка при удалина списка Todolist')
        }finally{
            runInAction(()=>{
                this.loading = false
            });
        }
    }
    
    changeTodoList = async (uId:string, lId:string, title:string) =>{
        this.loading = true;
        try {
            await putUsersUserIdTodoListsTodoListId(uId,lId, {title: `${title}` })
        } catch (error) {
            if(error instanceof Error) console.log('Ошибка при удалина списка Todolist')
        }finally{
            runInAction(()=>{
                this.loading = false
            });
        }
    }

    
}

export default new TodoStore