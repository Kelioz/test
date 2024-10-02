import React, { useEffect } from 'react'
import TodoStore from '../../../entites/todo/models/TodoStore'

export default function UsersPage() {
    const {users, getUserList} = TodoStore

    useEffect(()=>{
        getUserList()
    },[])
    
    console.log(users)
  return (
    <>123</>
  )
}
