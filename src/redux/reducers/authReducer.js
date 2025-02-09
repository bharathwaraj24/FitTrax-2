const initialState = {isAuthenticated: false, user: null};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {...state, isAuthenticated: true, user: action.payload};
        case 'LOGOUT':
            return {...state, isAuthenticated: false, user: null};
        case 'REGISTER':
            return {...state, isAuthenticated: true, user: action.payload};
        default:
            return state;
    }
};