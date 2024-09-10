export const ADD_TASK = "ADD_TASK"
export const REMOVE_TASK = "REMOVE_TASK"

export const addtask = (task) => ({
    type: ADD_TASK,
    payload: task
})

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: id
})