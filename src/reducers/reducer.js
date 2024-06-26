const initialState = {
    test: 'red',
    token: localStorage.getItem('accessToken') || null,  
    isAuthenticated: !!localStorage.getItem('accessToken'),
    roles: localStorage.getItem('roles') || [],
    email: '',
    modal: 'close',
    loading: false,
    events: [],
    error: ""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,                
                test: action.payload
            };

        case 'SET_AUTH_TOKEN':
            console.log("reducer auth");
            localStorage.setItem('accessToken', action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true,
            };

        case 'SET_ROLES':
            localStorage.setItem('roles', action.payload);
            return {
                ...state,
                roles: action.payload
            };

        case 'SET_EMAIL':
            localStorage.setItem('email', action.payload);
            return {
                ...state,
                roles: action.payload
            };
    
        case 'LOGOUT':
            console.log("reducer logout");
            localStorage.removeItem('accessToken');
            localStorage.removeItem('roles');
            localStorage.removeItem('email');
            return {
                ...state,
                token: null,
                roles: [],
                email: "",
                isAuthenticated: false,
            };

        case 'SET_LOADING':
            return {
                ...state,               
                loading: action.payload,
            };

        case 'EVENTS_LOADED': 
            return {
                ...state,                
                events: action.payload
            };

        case 'SET_MODAL':
            return {
                ...state,               
                modal:  action.payload
            };

        case 'SWITCH_DARKMODE':
            return {
                ...state,                
                darkMode: !state.darkMode
            };

        case 'SET_ERROR': 
            return {
                ...state,                
                error: action.payload
            };

        
        default:
            return state; 
    }   
}

export default reducer;