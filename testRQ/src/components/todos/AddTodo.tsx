import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { postUsersUserIdTodos, putUsersUserIdTodosTodoId } from '../../api'

export default function AddTodo() {
    const [title , setTitle] = useState('')
    const [description , setDescription] = useState('')
    const navigate = useNavigate()
    const params = useParams()
    const userId:any = params.userid
    const listsId:any = params.todolistsid
    console.log(listsId)
  return (
    <div className="container mt-5">
    <h2>Создание Todo</h2>
    <form >
        <div className="form-group">
            <label htmlFor="newTitle">Название</label>
            <input 
            type="text" 
            className="form-control" 
            id="newTitle" 
            placeholder="Введите  название" 
            required
            value={title}
            onChange={event=>setTitle(event.target.value)}
            
            />
            <label htmlFor="newTitle">Описание</label>
            <textarea 
            className="form-control" 
            id="newTitle" 
            placeholder="Введите описание" 
            required
            value={description}
            onChange={event=>setDescription(event.target.value)}
            
            />
        </div>
        <button onClick={async()=>{
               await postUsersUserIdTodos(userId, {
                "title": `${title}`,
                "description": `${description}`,
                "todoListId": `${listsId}`
              })
               navigate(`/user/${userId}/todoLists/${listsId}`)
        }}  type="button" className="btn btn-primary">Сохранить</button>
    </form>
</div>
  )
}
