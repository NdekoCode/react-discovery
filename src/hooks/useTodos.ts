/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useReducer } from "react";
import { Todo } from "../utils/types";
export enum TodoActionKind {
    ADD_TODO="ADD_TODO",
DELETE_TODO="DELETE_TODO",
TOGGLE_TODO="TOGGLE_TODO",
TOGGLE_ALL_COMPLETED="TOGGLE_ALL_COMPLETED",
HYDRATE_TODO="HYDRATE_TODO"
}
type TodosState = {
    todos:Todo[],
    allCompleted?:boolean
}
type ReducerAction = {
    type:TodoActionKind ,
    payload?:Todo |Todo[]|string | number
}

function todosReducer(state:TodosState,action:ReducerAction):TodosState{
    const {type, payload} = action;
    switch(type){
        case TodoActionKind.ADD_TODO:
            const id = Math.random().toString(36).substring(2, state.todos.length+2);
            return {
                ...state,todos:[{userId:1,id:id, title: payload, completed:false} as Todo,...state.todos]
            }
        case TodoActionKind.DELETE_TODO:
            return {
                ...state,
                todos:state.todos.filter(todo=>todo.id!==payload)
            }
        case TodoActionKind.TOGGLE_TODO:
            return {
                ...state,todos:state.todos.map(todo=>todo.id===payload? {...todo,completed:!todo.completed}:todo)
            }
        case TodoActionKind.HYDRATE_TODO:
                return {
                    ...state,todos:payload as Todo[]
                }
        case TodoActionKind.TOGGLE_ALL_COMPLETED:
            return{
        ...state,todos:state.todos.filter(todo=>todo.completed===!todo.completed)
        }
        default:
            return state;
    }

}
export function useTodos(initialTodos:TodosState={todos:[],allCompleted:false}){
    const [state,dispatch] = useReducer(todosReducer,initialTodos);
    const addTodo = useCallback((todo)=>dispatch({type:TodoActionKind.ADD_TODO,payload:(todo )}));
    const deleteTodo = useCallback((id)=>dispatch({type:TodoActionKind.DELETE_TODO,payload:id}));
    const toggleTodo = useCallback((id)=>dispatch({type:TodoActionKind.TOGGLE_TODO,payload:id}))
    const hydrateTodo = useCallback((todos)=>dispatch({type:TodoActionKind.HYDRATE_TODO,payload:todos}))
    return {
        todosState:state.todos,
        allCompleted:state.allCompleted,
        deleteTodo,
        toggleTodo,
        addTodo,
        hydrateTodo
    }
}