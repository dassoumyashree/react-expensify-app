// handles two actions - login and logout

export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {    // returns new state
                uid: action.uid
            };
        case 'LOGOUT':
            return {};  
        default: 
            return state;   // returns current state val. // if not login or logout this reducer does not care
    }
};