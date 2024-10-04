import { IForm } from "../type/type";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { onSubmit } from "../model/OnSubmit";

export default function ChangeTodoList() {
  const { register, handleSubmit } = useForm<IForm>({ mode: "onChange" });
  const param = useParams();
  const navigate = useNavigate();
  const userId = param.userid || "";
  const todoListId = param.todolistid || "";

  return (
    <div className="container mt-5">
      <h2>Создания пользователя</h2>
      <form onSubmit={handleSubmit(onSubmit(navigate, userId, todoListId))}>
        <div className="form-group">
          <label htmlFor="newTitle">Имя</label>
          <input
            type="text"
            className="form-control"
            placeholder="Введите Новое название"
            {...register("title", { required: "Обязательно к заполнению" })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
      </form>
    </div>
  );
}
