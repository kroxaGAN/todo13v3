import React, {useEffect, useState} from 'react'
import {todolistApi} from '../api/todolist-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodo()
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodo("12343")
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.deleteTodo("4f345b6c-1354-4a06-a02e-dfd46dcaaa0f")
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.updateTodo("f9240ee8-63d9-4590-9ee1-a3bb3d70def4", "!!!!!")
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const GetTasksStory = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTasks("a251b658-3f5c-4a04-b530-288eee7f09e6")
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTaskStory = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.deleteTask("a251b658-3f5c-4a04-b530-288eee7f09e6", "47d04b12-3254-42bc-bb7c-c7744720e6b5")
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTaskStory = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTask("a251b658-3f5c-4a04-b530-288eee7f09e6", "!!!!!NEW TASK!!!!")
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskStory = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.updateTask("a251b658-3f5c-4a04-b530-288eee7f09e6", "525fc4a9-ec34-472f-88b8-d6fc31772081", "!*****!")
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
