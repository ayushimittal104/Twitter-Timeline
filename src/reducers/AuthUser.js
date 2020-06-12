export const AuthUser = (state = null,action) =>{
    switch(action.type) {
        case 'AUTH_USER':
            return action.id
        default:
            return state
    }
}