import React, {useEffect, useState} from 'react'
import axios from "axios";
import { todolistApi } from '../api/todolist-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodo()
            .then((res)=>{
                const result=res
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
            todolistApi.createTodo("12343")
            .then((res)=>{
                const result=res.data.data
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
       todolistApi.deleteTodo("4f345b6c-1354-4a06-a02e-dfd46dcaaa0f")
            .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    todolistApi.updateTodo("f9240ee8-63d9-4590-9ee1-a3bb3d70def4","!!!!!")
    .then((res)=>{
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

