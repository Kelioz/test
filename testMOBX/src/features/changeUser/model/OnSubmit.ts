import { IForm } from "../type/type";
import { SubmitHandler } from "react-hook-form";
import UserStore from "../../../entites/user/model/UserStore";
import { useNavigate } from "react-router-dom";

// Функция onSubmit теперь принимает параметр navigate и userId
export const onSubmit = (navigate: ReturnType<typeof useNavigate>, userId: string): SubmitHandler<IForm> => async (data) => {
    await UserStore.updateUser(userId, data.name, data.email);
    return navigate("/");
};
