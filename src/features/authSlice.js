const initialState = {
    isAuthenticated: false
}

const authSlice = (state = initialState, action) => {
    switch (action.type) {
        case 'auth/login':
            return {
                ...state, isAuthenticated: true
            }
        case 'auth/logout':
            return {
                ...state, isAuthenticated: false
            }
        default:
            return state
    }
}

export const login = () => {
    return {
        type: 'auth/login'
    }
}

export const logout = () => {
    return {
        type: 'auth/logout'
    }
}

export default authSlice