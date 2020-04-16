import { isStudent, isProfessional } from './actions.js'

const initialState = {
    isLoggedIn: false,
    isStudent: false,
    isProfessional: false,
    student: {
        firstName: '',
    }
}

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOGGED_IN': {
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        }
        case 'IS_STUDENT': {
            return {
                ...state,
                isStudent: action.payload
            }
        }
        case 'GET_STUDENT_FIRST_NAME': {
            return {
                ...state,
                student: {
                    ...state.student,
                    firstName: action.payload
                }
            }
        }
        case 'IS_PROFESSIONAL': {
            return {
                ...state,
                isProfessional: action.payload
            }
        }
        default:
            return state
    }
}

export default dashboard