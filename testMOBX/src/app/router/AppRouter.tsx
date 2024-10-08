import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import UsersPage from "../../page/UsersPage/ui/UsersPage";
import AddUserPage from "../../page/AddUserPage/ui/AddUserPage";
import EditUserPage from "../../page/EditUserPage/ui/EditUserPage";
import TodoLIstPage from "../../page/TodoListPage/ui/TodoLIstPage";
import TodosPage from "../../page/TodosPage/ui/TodosPage";
import CreateTodoPage from "../../page/CreateTodoPage/ui/CreateTodoPage";
import TodoPage from "../../page/TodoPage/ui/TodoPage";
import ChangeTodoListPage from "../../page/ChangeTodoList/ui/ChangeTodoListPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <UsersPage />
          </Suspense>
        }
      />
      <Route
        path="/create-user"
        element={
          <Suspense>
            <AddUserPage />
          </Suspense>
        }
      />
      <Route
        path="/change-user/:userid"
        element={
          <Suspense>
            <EditUserPage />
          </Suspense>
        }
      />
      <Route
        path="/todolist/:userid"
        element={
          <Suspense>
            <TodoLIstPage />
          </Suspense>
        }
      />
      <Route
        path="/user/:userid/todoLists/:todolistid/update"
        element={
          <Suspense>
            <ChangeTodoListPage />
          </Suspense>
        }
      />
      <Route
        path="/user/:userid/todoLists/:todolistid"
        element={
          <Suspense>
            <TodosPage />
          </Suspense>
        }
      />
      <Route
        path="/user/:userid/todoLists/:todolistid/create-todo"
        element={
          <Suspense>
            <CreateTodoPage />
          </Suspense>
        }
      />
      <Route
        path="/user/:userid/todo/:todoid"
        element={
          <Suspense>
            <TodoPage />
          </Suspense>
        }
      />
    </Routes>
  );
};
