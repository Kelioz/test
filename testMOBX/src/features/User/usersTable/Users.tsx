import React, { useEffect, useState } from "react";
import UserStore from "../../../entites/user/model/UserStore";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Users = observer(() => {
  const { users, loading, getUserList } = UserStore;
  const take = 3;
  const [skip, setSkip] = useState(0);
  const navigate = useNavigate();
  const [totalLength, setTotalLenght] = useState(3);

  useEffect(() => {
    getUserList(0, take);
  }, []);

  const handlePagination = (skip: number) => {
    setSkip(skip);
    getUserList(skip, 3);
    setTotalLenght(users?.length + skip);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Пользователи</h2>
      <button
        onClick={() => {
          navigate(`/create-user`);
        }}
        className="btn btn-success btn-sm"
      >
        Добавить пользователя
      </button>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Email</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((el, index: number) => (
              <tr key={el.id}>
                <td>{skip + index + 1}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/todolist/${el.id}`);
                    }}
                    className="btn btn-success btn-sm"
                  >
                    Открыть
                  </button>
                  <button
                    onClick={() => {
                      navigate(`/change-user/${el.id}`);
                    }}
                    className="btn btn-warning btn-sm"
                  >
                    Изменить
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              {loading ? (
                <td colSpan={4} className="text-center">
                  Загрузка
                </td>
              ) : (
                <td colSpan={4} className="text-center">
                  Пользователи не найдены
                </td>
              )}
            </tr>
          )}
        </tbody>
      </table>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li>
            <button
              className="page-link"
              onClick={() => handlePagination(skip - 3)}
              disabled={skip === 0}
            >
              Назад
            </button>
          </li>

          <li>
            {skip >= totalLength ? (
              <button
                className="page-link"
                onClick={() => handlePagination(skip + 3)}
                disabled={true}
              >
                Вперед
              </button>
            ) : (
              <button
                className="page-link"
                onClick={() => handlePagination(skip + 3)}
              >
                Вперед
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
});

export default Users;
