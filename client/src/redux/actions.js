
export const isStudent = result => {
    return ({
        type: "IS_STUDENT",
        payload: result
    })
}

export const isProfessional = result => {
    return ({
        type: "IS_PROFESSIONAL",
        payload: result
    })
}


