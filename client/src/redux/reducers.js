import { isStudent, isProfessional } from './actions.js'

const initialState = {
    isStudent: false,
    isProfessional: false
}

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_STUDENT': {
            return {
                ...state,
                isStudent: action.payload
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