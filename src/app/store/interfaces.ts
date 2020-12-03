export interface Category {
    id: number,
    importance: string
}

export interface Person {
    id: number,
    name: string,
    age: number,
    gender: string,
    position: string,
    todosID: number
}

export interface EmployeeTodoRelation {
    employeeid: number,
    todoid: number
}

export interface Todo {
    id: number,
    description: string
}