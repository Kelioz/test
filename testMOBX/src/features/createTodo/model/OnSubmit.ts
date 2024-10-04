import { IForm } from "../type/type";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TodoStore from "../../../entites/todo/models/TodoStore";

export const onSubmit = (navigate: ReturnType<typeof useNavigate>, userId: string, todoListId:string): SubmitHandler<IForm> => async (data) => {
    await TodoStore.createTodo(userId, todoListId, data.title, data.description);
    return navigate(`/user/${userId}/todoLists/${todoListId}/`);
};
