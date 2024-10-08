import { useEffect, useState } from "react";
import UserStore from "../../../../entites/User/model/UserStore.ts";
import { useNavigate, useParams } from "react-router-dom";
import TodoStore from "../../../../entites/Todo/models/TodoStore.ts";
import { observer } from "mobx-react-lite";

const TodoLists = observer(() => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const { todoList, addTodoList, getTodoList, removeTodoList } = TodoStore;
  const { user, getUserById } = UserStore;
  const param = useParams();
  const userId: string = param.userid || "";

  useEffect(() => {
    getUserById(userId);
    getTodoList(userId);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Todo Lists для {user?.name}</h2>
      <input
        className="input"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <button
        onClick={() => {
          addTodoList(userId, title);
          location.reload();
        }}
        className="btn btn-success btn-sm"
      >
        Добавить
      </button>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {todoList.length > 0 ? (
            todoList.map((el: any, index: number) => (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.title}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/user/${param.userid}/todoLists/${el.id}`);
                    }}
                    className="btn btn-success btn-sm"
                  >
                    Открыть
                  </button>
                  <button
                    onClick={() => {
                      navigate(
                        `/user/${param.userid}/todoLists/${el.id}/update`
                      );
                    }}
                    className="btn btn-warning btn-sm"
                  >
                    Изменить
                  </button>
                  <button
                    onClick={() => {
                      removeTodoList(userId, el.id);
                      location.reload();
                    }}
                    className="btn btn-danger btn-sm"
                  >
                    Удалить
                  </button>
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
export default TodoLists;
