import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import TodoListsPage from '../../page/TodoListsPage'
import Users from '../../components/users/Users'
import Todos from '../../components/todos/Todos'

import UpdateUser from '../../components/users/Update.User'
import CreateUser from '../../components/users/CreateUser'
import AddTodo from '../../components/todos/AddTodo'
import Todo from '../../components/todos/Todo'




export const AppRouter = () => {
    return (
        <Routes>
            <Route
                path='/todolists/:userid'
                element={
                    <Suspense>
                        <TodoListsPage />
                    </Suspense>
                }
            />
            <Route
                path='/user/:userid/todoLists/:todolistsid'
                element={
                    <Suspense>
                        <Todos />
                    </Suspense>
                }
            />
            <Route
                path='/user/:userid/todoLists/:todolistsid/update'
                element={
                    <Suspense>
                        <UpdateTodolist />
                    </Suspense>
                }
            />
                        <Route
                path='/user/:userid/update'
                element={
                    <Suspense>
                        <UpdateUser />
                    </Suspense>
                }
            />
            <Route
                path='/create-user'
                element={
                    <Suspense>
                        <CreateUser />
                    </Suspense>
                }
            />
             <Route
                path='/user/:userid/todoLists/:todolistsid/create-todo'
                element={
                    <Suspense>
                        <AddTodo />
                    </Suspense>
                }
            />
            <Route
                path='/user/:userid/todo/:todoid'
                element={
                    <Suspense>
                        <Todo />
                    </Suspense>
                }
            />
             <Route
                path='/'
                element={
                    <Suspense>
                        <Users />
                    </Suspense>
                }
            />
        </Routes>
    )
}
