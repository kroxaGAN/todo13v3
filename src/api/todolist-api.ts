import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "26fb8af1-3e7d-4c3b-ab20-99c24ecae36c"
    }
})


export const todolistApi = {
    getTodo() {
        return instance.get<TodolistType[]>("todo-lists")
    },
    updateTodo(todoId: string, editTitle: string) {
        return instance.put<ResponseType>(`todo-lists/${todoId}`, {title: editTitle})
    },
    createTodo(todoname: string) {
        return instance.post<ResponseType<{item:TodolistType}>>("todo-lists", {title: todoname})
    },
    deleteTodo(todoId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todoId}`)
    }
}

type TodolistType ={
    "id": string,
    "title": string,
    "addedDate": string,
    "order": number
}

type CreateTodoType = {
    resultCode: number
    messages: string[],
    data: {
        item: TodolistType
    }
}
type UpdateDeleteTodoType = {
    resultCode: number
    messages: string[],
    data: {}
}

type ResponseType<T={}> = {
    resultCode: number
    messages: string[],
    data: T
}
