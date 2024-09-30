import React from 'react'
import getUserTodos from '../query/getUserTodos'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUsersUserIdTodosTodoId, patchUsersUserIdTodosTodoIdToggle } from '../../api'

export default function Todos() {
    const params = useParams()
    const userId:any = params.userid
    const listsId:any = params.todolistsid
    const navigate = useNavigate()
    const userTodos =  getUserTodos(userId) 

    function toggle(compleate:boolean, todoId:string){
        if(compleate == false){
            return(
                <button onClick={()=>{patchUsersUserIdTodosTodoIdToggle(userId,todoId)}}
                className="btn btn-success btn-sm">Выполнить</button>
            )
        }else if(compleate == true){
            return(
                <button onClick={()=>{patchUsersUserIdTodosTodoIdToggle(userId, todoId)}}
                className="btn btn-danger btn-sm">Невыполнить</button>
            )

        }
    }

  return (
    <div className="container mt-5">
    <h2 className="mb-4">Todos </h2>
    <button  onClick={()=>{navigate(`/user/${userId}/todoLists/${listsId}/create-todo`)}} className="btn btn-success btn-sm">Добавить</button>
    <table className="table table-bordered">
        <thead className="thead-light">
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Состояние</th>
                <th>Действия</th>
            </tr>
        </thead>
        <tbody>
        {userTodos.length > 0 ? (
                        userTodos.map((el:any, index:number) => (
                            <tr key={el.id}>
                                <td>{index + 1}</td>
                                <td>{el.title}</td>
                                <td>{el.completed ? <div>Выполнено</div>: <div>Не выполнено</div>}</td>
                                

                                <td>
                                    <button onClick={()=>{navigate(`/user/${userId}/todo/${el.id}`)}}   className="btn btn-success btn-sm">Открыть</button>
                                    <button onClick={()=>{deleteUsersUserIdTodosTodoId(userId, el.id)}} className="btn btn-danger btn-sm">Удалить</button>
                                    {toggle(el.completed, el.id)}
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
