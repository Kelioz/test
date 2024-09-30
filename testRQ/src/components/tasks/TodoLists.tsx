import  { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import getUserById from '../query/getUserById';
import getUserTodoLists from '../query/getUserTodoLists';
import { deleteUsersUserIdTodoListsTodoListId, postUsersUserIdTodoLists } from '../../api';




function TodoLists() {
    const params:any = useParams();
    const userId = params.userid;
    const user = getUserById(userId)
    const TodoLists = getUserTodoLists(userId)
    const [title, setTitle] = useState('')
    const navigate = useNavigate()

    async function post(id:string){
        event?.preventDefault()
        postUsersUserIdTodoLists(id, {title})
        setTitle('')

    }
    
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Todo Lists для {user?.name}</h2>
            <input className='input'
                value={title}
                onChange={event=> setTitle(event.target.value)}
            />
            <button onClick={()=>{post(userId)}} className="btn btn-success btn-sm">Добавить</button>
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Действия</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {TodoLists.length > 0 ? (
                        TodoLists.map((el:any, index:number) => (
                            <tr key={el.id}>
                                <td>{index + 1}</td>
                                <td>{el.title}</td>
                                

                                <td>
                                <button onClick={()=>{navigate(`/user/${params.userid}/todoLists/${el.id}`)}}  className="btn btn-success btn-sm">Открыть</button>
                                <button onClick={()=>{navigate(`/user/${params.userid}/todoLists/${el.id}/update`)}}  className="btn btn-warning btn-sm">Изменить</button>
                                <button onClick={()=>{deleteUsersUserIdTodoListsTodoListId(userId, el.id)  }} className="btn btn-danger btn-sm">Удалить</button>
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
    );
}

export default TodoLists;