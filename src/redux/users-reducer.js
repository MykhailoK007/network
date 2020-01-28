const FOLLOW = 'FOLlOW';
const UNFOLLOW = 'UNFOLlOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT-PAGE';
const SET_COUNT = 'TOTAL-COUNT';

let initalState = {
    users:[],
    currentPage:1,
    pageSize:40,
    totalUserCount:0
}

function usersReducer(state = initalState, action){
        switch (action.type) {
            case SET_USERS:
                return {
                    ...state,
                    users:[...action.users]
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
            case CURRENT_PAGE:
                return {
                    ...state,
                    currentPage:action.currentPage
                }
            case SET_COUNT:
                return {
                    ...state,
                    totalUserCount: action.count
                }
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
        id
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
export const setTotalUserCountAC = (totalUserCount) => {
    return {
        type: SET_COUNT,
        count: totalUserCount
    }
}
export default usersReducer;
