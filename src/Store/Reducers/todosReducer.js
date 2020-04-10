import { SET_INPUT, ADD_INPUT, REMOVE_INPUT } from "../Actions/actionTypes";

const initialState = {
    todo: [],
    text: ''
}

const todosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_INPUT: {
            return {
                ...state,
                text: payload
            }
        }
        case ADD_INPUT: {
            return {
                ...state,
                todo: [...state.todo, payload],
                text: ''
            }
        }
        case REMOVE_INPUT: {
            return {
                ...state
            }
        }
        default:
            return state

    }
}
export default todosReducer