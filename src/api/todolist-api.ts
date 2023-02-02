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
    },
    getTasks(todoId:string){
        return instance.get(`todo-lists/${todoId}/tasks`)
    },
    deleteTask(todolistId:string,taskId:string){
       return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    createTask(todolistId:string,newTitle:string){
        return instance.post(`todo-lists/${todolistId}/tasks`,{title:newTitle})
    }
}

type TodolistType ={
    "id": string,
    "title": string,
    "addedDate": string,
    "order": number
}
type ResponseType<T={}> = {
    resultCode: number
    messages: string[],
    data: T
}

