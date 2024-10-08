import { IForm } from "../type/type.ts";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TodoStore from "../../../../entites/Todo/models/TodoStore.ts";

// Функция onSubmit теперь принимает параметр navigate и userId
export const onSubmit = (navigate: ReturnType<typeof useNavigate>, userId:string, todoListId:string): SubmitHandler<IForm> => async (data) => {
    await TodoStore.changeTodoList(userId, todoListId, data.title)
    return navigate(`/todolist/${userId}`)
};
