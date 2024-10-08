import { useEffect } from "react";
import TodoStore from "../../../../entites/Todo/models/TodoStore.ts";
import { useNavigate, useParams } from "react-router-dom";
import { Toggle } from "./Toggle.tsx";
import { observer } from "mobx-react-lite";

const Todos = observer(() => {
  const { todos, getTodos, removeTodo } = TodoStore;
  const navigate = useNavigate();
  const param = useParams();
  const userId: string = param.userid || "";
  const todoListId: string = param.todolistid || "";

  useEffect(() => {
    getTodos(userId);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Todos </h2>
      <button
        onClick={() => {
          navigate(`/user/${userId}/todoLists/${todoListId}/create-todo`);
        }}
        className="btn btn-success btn-sm"
      >
        Добавить
      </button>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Название</th>
            <th>Состояние</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {todos.length > 0 ? (
            todos.map((el, index: number) => (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.title}</td>
                <td>
                  {el.completed ? (
                    <div>Выполнено</div>
                  ) : (
                    <div>Не выполнено</div>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => {
                      navigate(`/user/${userId}/todo/${el.id}`);
                    }}
                    className="btn btn-success btn-sm"
                  >
                    Открыть
                  </button>
                  <button
                    onClick={() => {
                      removeTodo(userId, el.id);
                      location.reload();
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Удалить
                  </button>
                  {Toggle(el.completed, el.id, userId)}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                Нет задач
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
});
export default Todos;
