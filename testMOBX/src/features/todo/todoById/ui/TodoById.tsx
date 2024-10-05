import React, { useEffect } from "react";
import TodoStore from "../../../../entites/todo/models/TodoStore.ts";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

const TodoById = observer(() => {
  const { todo, getTodoById } = TodoStore;

  const param = useParams();
  const userId: string = param.userid || "";
  const todoId: string = param.todoid || "";
  useEffect(() => {
    getTodoById(userId, todoId);
  }, []);

  return (
    <div className="container mt-5">
      <button
        onClick={() => {
          window.history.go(-1);
          return false;
        }}
        className="btn btn-primary btn-sm"
      >
        Назад
      </button>

      <div className="card">
        <div className="card-header">
          <h5>{todo?.title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{todo?.description}</p>
        </div>
        <div className="card-body ">
          Статус:{" "}
          {todo?.completed ? (
            <div style={{ color: "green" }}>Выполнено</div>
          ) : (
            <div style={{ color: "red" }}>Не выполнено</div>
          )}
        </div>
        <div className="card-footer text-muted">
          Дата создания: {`${todo?.createdAt}`.slice(0, 19)}
        </div>
        <div className="card-footer text-muted">
          Дата обновления: {`${todo?.createdAt}`.slice(0, 19)}
        </div>
      </div>
    </div>
  );
});
export default TodoById;
