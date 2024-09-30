import { useNavigate, useParams } from "react-router-dom"
import React, { useState } from 'react'
import { postUsers } from "../../api"

export default function CreateUser() {
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const navigate = useNavigate()




  return (
    <div className="container mt-5">
    <h2>Создания пользователя</h2>
    <form >
        <div className="form-group">
            <label htmlFor="newTitle">Имя</label>
            <input 
            type="text" 
            className="form-control" 
            id="newTitle" 
            placeholder="Введите Имя" 
            required
            value={name}
            onChange={event=>setName(event.target.value)}
            />
            <label htmlFor="newTitle">Email</label>
            <input 
            type="text" 
            className="form-control" 
            id="newTitle" 
            placeholder="Введите email" 
            required
            value={email}
            onChange={event=>setEmail(event.target.value)}
            
            />
        </div>
        <button onClick={async()=>{
               await postUsers({"name": `${name}`, "email": `${email}`} )
               navigate(`/`)
        }}  type="button" className="btn btn-primary">Сохранить</button>
    </form>
</div>
  )
}
