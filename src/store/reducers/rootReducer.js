const initState = {
    users: [
        { id: 1, name: 'Ngoc Quynh' },
        { id: 2, name: 'Ngoc Quyen' },
        { id: 3, name: 'Thanh Huyen' },
    ], post: []
}


const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('Delete User Action', action.payload.id)
            let users = state.users
            users = users.filter(user => user.id !== action.payload.id)
            return {
                ...state, users
            };
        default:
            return state;
    }

}

export default rootReducer;