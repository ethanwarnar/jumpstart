import { isStudent, isProfessional } from './actions.js'

const initialState = {
    isLoggedIn: false,
    isStudent: false,
    isProfessional: false,
    student: {
        firstName: '',
    },
    eventArray: {
        array: []
    }
}

function addNewEvent(array, event) {
    // console.log(event)
    array.push(event)
    // console.log(array)
    return array
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
        case 'ADD_EVENT': {

            // state.eventArray.array.push(action.payload)
            // array.push(action.payload)
            // var newEventArray = addNewEvent(state.eventArray.array, action.payload)
            // var newArray = state.eventArray.push(action.payload)

            return {
                ...state,
                eventArray: {
                    array: state.eventArray.array.concat(action.payload)
                }
            }
        }
        default:
            return state
    }
}

export default dashboard