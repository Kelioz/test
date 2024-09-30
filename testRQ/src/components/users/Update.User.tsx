import { useNavigate, useParams } from "react-router-dom"
import React, { useState } from 'react'
import { putUsersUserId } from "../../api"

export default function UpdateUser() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const navigate = useNavigate()
  const params = useParams()
  const userId:any = params.userid



  return (
    <div className="container mt-5">
    <h2>Изменение Профиля</h2>
    <form >
        <div className="form-group">
            <label htmlFor="newTitle">Новое Имя</label>
            <input 
            type="text" 
            className="form-control" 
            id="newTitle" 
            placeholder="Введите новое Имя" 
            required
            value={name}
            onChange={event=>setName(event.target.value)}
            />
            <label htmlFor="newTitle">Новый Email</label>
            <input 
            type="text" 
            className="form-control" 
            id="newTitle" 
            placeholder="Введите новый email" 
            required
            value={email}
            onChange={event=>setEmail(event.target.value)}
            
            />
        </div>
        <button onClick={async()=>{
               await putUsersUserId(userId,  {"name": `${name}`, "email": `${email}`} )
               navigate(`/`)
        }}  type="button" className="btn btn-primary">Сохранить</button>
    </form>
</div>
  )
}
