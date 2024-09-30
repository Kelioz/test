import { useNavigate, useParams } from "react-router-dom"
import React, { useState } from 'react'
import { putUsersUserIdTodoListsTodoListId } from "../../api"

export default function UpdateTodolist() {
  const [title , setTitle] = useState('')
  const navigate = useNavigate()
  const params = useParams()
  const userId:any = params.userid
  const listsId:any = params.todolistsid


  return (
    <div className="container mt-5">
    <h2>Изменение названия</h2>
    <form >
        <div className="form-group">
            <label htmlFor="newTitle">Новое название</label>
            <input 
            type="text" 
            className="form-control" 
            id="newTitle" 
            placeholder="Введите новое название" 
            required
            value={title}
            onChange={event=>setTitle(event.target.value)}
            
            />
        </div>
        <button onClick={async()=>{
               await putUsersUserIdTodoListsTodoListId(userId, listsId, {"title": `${title}`})
               navigate(`/todolists/${userId}`)
        }}  type="button" className="btn btn-primary">Сохранить</button>
    </form>
</div>
  )
}
