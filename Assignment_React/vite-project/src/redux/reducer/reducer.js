import { ADD_TASK, REMOVE_TASK } from "../action/action";

export const taskReducer = (state= {initialState:[]}, action) => {
    switch(action.type) {
        case ADD_TASK: 
            return [...state, action.payload]
        case REMOVE_TASK:
            return state.filter(task => task.id !== action.payload)
        default:
            return state
    }
}