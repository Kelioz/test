import { SubmitHandler, useForm } from "react-hook-form"
import { IForm, IParam } from "../type/type"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import UserStore from "../../../entites/user/model/UserStore"


export default function ChangeUser() {
    const  navigate = useNavigate()
    const {updateUser} = UserStore
    const {register, handleSubmit} = useForm<IForm>({mode:'onChange'})
    const param = useParams() 

    const onSubmit:SubmitHandler<IForm> = async data =>{
        await updateUser(param.userid, data.name, data.email )
        return navigate('/')
    }

  return (
    <div className="container mt-5">
    <h2>Изменение Профиля</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group" >
            <label htmlFor="newTitle">Новое Имя</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="Введите новое Имя" 
            {...register ('name',{required: 'Обязательно к заполнению'})}

            />
            <label htmlFor="newTitle">Новый Email</label>
            <input 
            type="email" 
            className="form-control" 
            placeholder="Введите новый email" 
            {...register ('email',{required: 'Обязательно к заполнению'})}
            />
        </div>
        <button type="submit" className="btn btn-primary">Сохранить</button>
    </form>
</div>
  )
}
