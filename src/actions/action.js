const setAuthToken = (token) => {
    console.log("setAuthToken " + token);
    return {
    type: 'SET_AUTH_TOKEN',
    payload: token
  }
}

const setRoles = (roles) => {
    console.log("setRoles " + roles);
    return {
        type: 'SET_ROLES',
        payload: roles
    }
}

const setEmail = (email = "") => {
    console.log("setEmail " + email);
    return {
        type: 'SET_EMAIL',
        payload: email
    }
}

const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

const eventsLoaded = (events) => {
    return {
        type: 'EVENTS_LOADED',
        payload: events
    }
}

const setLoading = (value) => {
    console.log("loading: " + value);
    return {
        type: 'SET_LOADING',
        payload: value
    }
}

const setModal = (value = 'close') => {
    setError();
    return {
        type: 'SET_MODAL',
        payload: value
    }
}

const testAction = (color) => {
    //console.log("test action "+ color);
    return {
        type: 'TEST',
        payload: color
    }
}

const switchDarkMode = () => {
    return {
        type: 'SWITCH_DARKMODE'
    }
}

const setError = (error = "") => {
    return {
        type: 'SET_ERROR',
        payload: error
    }
}

export {
    setAuthToken,
    setRoles,
    setEmail,
    logout,
    testAction,
    switchDarkMode,
    setLoading,
    eventsLoaded,
    setModal,
    setError

};