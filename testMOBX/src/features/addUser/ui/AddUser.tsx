import React from "react";
import { useNavigate } from "react-router-dom";
import UserStore from "../../../entites/user/model/UserStore";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForm } from "../type/type";

export default function AddUser() {
  const { addUser } = UserStore;
  const { register, handleSubmit } = useForm<IForm>({ mode: "onChange" });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IForm> = async (data) => {
    await addUser(data.name, data.email);
    return navigate(`/`);
  };

  return (
    <div className="container mt-5">
      <h2>Создания пользователя</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="newTitle">Имя</label>
          <input
            type="text"
            className="form-control"
            placeholder="Введите Имя"
            {...register("name", { required: "Обязательно к заполнению" })}
          />
          <label htmlFor="newTitle">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Введите email"
            {...register("email", { required: "Обязательно к заполнению" })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
      </form>
    </div>
  );
}
