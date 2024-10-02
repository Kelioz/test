import React, { useEffect } from 'react';
import UserStore from '../../entites/user/model/UserStore';
import { observer } from 'mobx-react-lite';

const Users = observer(() => {
    const { users, loading, getUserList} = UserStore;

    useEffect(() => {
        getUserList();
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Пользователи</h2>
            <button className="btn btn-success btn-sm">Добавить пользователя</button>
            <table className="table table-bordered">
                <thead className="thead-light">
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
                                <td>{index + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                <td>
                                    <button className="btn btn-success btn-sm">Открыть</button>
                                    <button className="btn btn-warning btn-sm">Изменить</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            {loading ? 
                            <td colSpan={4} className="text-center">Загрузка</td>:
                            <td colSpan={4} className="text-center">Пользователи не найдены</td>}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
});

export default Users;
