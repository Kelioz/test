import React from 'react'
import { IForm } from '../type/type'
import { SubmitHandler, useForm } from "react-hook-form"
import { useParams } from 'react-router-dom'
import TodoStore from '../../../entites/todo/models/TodoStore'
import { useNavigate } from 'react-router-dom'


export default function ChangeTodoList() {
    const {changeTodoList} = TodoStore
    const {register, handleSubmit} = useForm<IForm>({mode:'onChange'})
    const param = useParams()

    const navigate = useNavigate()
    const onSubmit:SubmitHandler<IForm> = async data =>{
        await changeTodoList(param.userid, param.todolistid, data.title)
        return navigate(`/todolist/${param.userid}`)
    }

    return (
      <div className="container mt-5">
      <h2>Создания пользователя</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
              <label htmlFor="newTitle">Имя</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="Введите Новое название" 
              {...register ('title',{required: 'Обязательно к заполнению'})}
              />
          </div>
          <button type="submit" className="btn btn-primary">Сохранить</button>
      </form>
  </div>
  )
}
