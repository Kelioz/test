import { makeAutoObservable, runInAction } from "mobx";
import {ArrayOfTodos, ArrayOfTodoLists, deleteUsersUserIdTodoListsTodoListId, getUsersUserIdTodoLists, postUsersUserIdTodoLists, putUsersUserIdTodoListsTodoListId, Todo, TodoList, getUsersUserIdTodoListsTodoListId, getUsersUserIdTodos, postUsersUserIdTodos, patchUsersUserIdTodosTodoIdToggle, deleteUsersUserIdTodosTodoId, getUsersUserIdTodosTodoId } from "../../../shared/api/api";




class TodoStore{
    todoList:TodoList[] = [];
    todos:Todo[]=[]
    todo:Todo[]=[];
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

    getTodos = async (id:string) => {
        this.loading = true;
        try {
            const { data } = await getUsersUserIdTodos(id);

            runInAction(() => {
                this.todos = data?.results || [];
            });
        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при получении  Todos', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    createTodo = async (id:string, todoListId:string,title:string, description:string) => {
        this.loading = true;
        try {
            await postUsersUserIdTodos(id,{title:`${title}`, todoListId:`${todoListId}`, description:`${description}`});


        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при добавлении Todos', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };
    

    toggleComplete = async (id:string, todoid:string) => {
        this.loading = true;
        try {
            await patchUsersUserIdTodosTodoIdToggle(id, todoid);


        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при добавлении Todos', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    removeTodo = async (id:string, todoid:string) => {
        this.loading = true;
        try {
            await deleteUsersUserIdTodosTodoId(id, todoid);


        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при добавлении Todos', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };

    getTodoById = async (id:string, todoid:string) => {
        this.loading = true;
        try {
            const { data } = await getUsersUserIdTodosTodoId(id, todoid);

            runInAction(() => {
                this.todo = data || [];
            });
        } catch (error) {
            if (error instanceof Error) console.log('Ошибка при получении  Todos', error.message);
        } finally {
            runInAction(() => {
                this.loading = false;
            });
        }
    };
}

export default new TodoStore