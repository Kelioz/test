import React from 'react'
import { useParams } from 'react-router-dom'
import getTodo from '../query/getTodo'

export default function Todo() {
    const params = useParams()
    const userId:any = params.userid
    const todoId:any = params.todoid
    const todo = getTodo(userId, todoId)
    console.log(userId)
    
  return (
    <div className="container mt-5">
    <button onClick={()=>{window.history.go(-1); return false;}}   className="btn btn-primary btn-sm">Назад</button>

    <div className="card">
        <div className="card-header">
            <h5>{todo.title}</h5>
        </div>
        <div className="card-body">
            <p className="card-text">{todo.description}</p>
        </div>
        <div className="card-body ">
            Статус: {todo.completed ? <div style={{color: 'green'}}>Выполнено</div>: <div style={{color: "red"}}>Не выполнено</div>}
        </div>
        <div className="card-footer text-muted">
            Дата создания: {`${todo.createdAt}`.slice(0,19)}
        </div>
        <div className="card-footer text-muted">
            Дата обновления: {`${todo.createdAt}`.slice(0,19)}
        </div>
    </div>
</div>
  )
}
