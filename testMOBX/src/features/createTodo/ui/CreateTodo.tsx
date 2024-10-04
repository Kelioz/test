import { IForm } from "../type/type";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import TodoStore from "../../../entites/todo/models/TodoStore";
import { useNavigate } from "react-router-dom";

export default function CreateTodo() {
  const { createTodo } = TodoStore;
  const { register, handleSubmit } = useForm<IForm>({ mode: "onChange" });
  const param = useParams();
  const navigate = useNavigate();
  const userId: string = param.userid || "";
  const todoListId: string = param.todolistid || "";

  const onSubmit: SubmitHandler<IForm> = async (data) => {
    await createTodo(userId, todoListId, data.title, data.description);
    return navigate(`/user/${userId}/todoLists/${param.todolistid}/`);
  };

  return (
    <div className="container mt-5">
      <h2>Создания Todo</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="newTitle">Название</label>
          <input
            type="text"
            className="form-control"
            placeholder="Введите назваение Todo"
            {...register("title", { required: "Обязательно к заполнению" })}
          />
          <label htmlFor="newTitle">Описание</label>
          <textarea
            className="form-control"
            id="newTitle"
            placeholder="Введите описание"
            {...register("description", {
              required: "Обязательно к заполнению",
            })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </form>
    </div>
  );
}
