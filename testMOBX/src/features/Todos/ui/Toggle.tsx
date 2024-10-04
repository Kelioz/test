import { useParams } from "react-router-dom";
import TodoStore from "../../../entites/todo/models/TodoStore";

export function Toggle(complete: boolean, todoId: string, userid: string) {
  const { toggleComplete } = TodoStore;
  if (complete == false) {
    return (
      <button
        onClick={() => {
          toggleComplete(userid, todoId);
        }}
        className="btn btn-success btn-sm"
      >
        Выполнить
      </button>
    );
  } else if (complete == true) {
    return (
      <button
        onClick={() => {
          toggleComplete(userid, todoId);
        }}
        className="btn btn-danger btn-sm"
      >
        Невыполнить
      </button>
    );
  }
}
