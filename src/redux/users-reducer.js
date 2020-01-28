const FOLLOW = 'FOLlOW';
const UNFOLLOW = 'UNFOLlOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';


let initalState = {
    users:[],
    currentPage:1,
    pageSize:4,
    totalUserCount:20
}

function usersReducer(state = initalState, action){
        switch (action.type) {
            case SET_USERS:
                return {
                    ...state,
                    users:[...state.users, ...action.users]
                }
            case FOLLOW:

                return {
                    ...state,
                    users:state.users.map(element => {
                        if(element.id == action.id){
                           return { ...element,followed:true}
                        }
                            return element
                    })

                };
            case UNFOLLOW:
                return {
                    ...state,
                    users:state.users.map(element => {
                        if(element.id == action.id){
                            return { ...element,followed:false}
                        }
                        return element;
                    })

                };
            default:
                return state;

        }

};


export const addUserAC = (id) => {
    return {
        type:FOLLOW,
        id:id
    }
}
export const deleteUserAC = (id) => {
    return{
        type:UNFOLLOW,
        id:id
    }
}
export const setUserAC = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type:CURRENT_PAGE,
        currentPage
    }
}

export default usersReducer;
