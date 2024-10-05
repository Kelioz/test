import { useForm } from "react-hook-form";
import { IForm } from "../type/type";
import { onSubmit } from "../model/OnSubmit";
import { useNavigate, useParams } from "react-router-dom";

export default function ChangeUser() {
  const { register, handleSubmit } = useForm<IForm>({ mode: "onChange" });
  const navigate = useNavigate();
  const params = useParams();
  const userId = params.userid || "";

  return (
    <div className="container mt-5">
      <h2>Изменение Профиля</h2>
      <form onSubmit={handleSubmit(onSubmit(navigate, userId))}>
        <div className="form-group">
          <label htmlFor="newTitle">Новое Имя</label>
          <input
            type="text"
            className="form-control"
            placeholder="Введите новое Имя"
            {...register("name", { required: "Обязательно к заполнению" })}
          />
          <label htmlFor="newTitle">Новый Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Введите новый email"
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
