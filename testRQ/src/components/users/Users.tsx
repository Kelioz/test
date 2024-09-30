import { useNavigate } from "react-router-dom"
import getUsers from "../query/getUsers"

export default function Users() {
    const navigate = useNavigate()
    const users = getUsers()

  return (
    <div className="container mt-5">
    <h2 className="mb-4">Пользователи </h2>
    <button onClick={()=>{navigate(`/create-user`)}}  className="btn btn-success btn-sm">Добавить пользователя</button>
    <table className="table table-bordered">
        <thead className="thead-light">
            <tr>
                <th>#</th>
                <th>Имя</th>
                <th>email</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
        {users.length > 0 ? (
                        users.map((el, index:number) => (
                            <tr key={el.id}>
                                <td>{index + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.email}</td>
                                

                                <td>
                                    <button onClick={()=>{navigate(`/todolists/${el.id}`)}}  className="btn btn-success btn-sm">Открыть</button>
                                    <button onClick={()=>{navigate(`/user/${el.id}/update`)}}  className="btn btn-warning btn-sm">Изменить</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} className="text-center">Нет задач</td>
                        </tr>
                    )}
        </tbody>
    </table>
</div>
  )
}
