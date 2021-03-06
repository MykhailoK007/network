const FOLLOW = 'FOLlOW';
const UNFOLLOW = 'UNFOLlOW';
const SET_USERS = 'SET-USERS';
const CURRENT_PAGE = 'CURRENT-PAGE';
const SET_COUNT = 'TOTAL-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const TOGGLE_FOLLOW_PROGRESS = 'FOLLOW-PROGRESS';
let initalState = {
    users:[],
    currentPage:1,
    pageSize:40,
    totalUserCount:0,
    isFetching:true,
    followingInProgress:[2,3,4]
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
            case TOGGLE_FETCHING:
                return{
                    ...state,
                    isFetching:action.isFetching
                }
            case TOGGLE_FOLLOW_PROGRESS:
                return{
                    ...state,
                    followingInProgress: action.isFetching
                        ?[...state.followingInProgress,action.userId]
                        :state.followingInProgress.filter(id => {return id != action.userId})
                }
            default:
                return state;

        }

};


export const addUser = (id) => {
    return {
        type:FOLLOW,
        id:id
    }
}
export const deleteUser = (id) => {
    return{
        type:UNFOLLOW,
        id
    }
}
export const setUsers = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type:CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUserCount = (totalUserCount) => {
    return {
        type: SET_COUNT,
        count: totalUserCount
    }
}
export const toggleFetching = (isFetching) => {
    return {
        type:TOGGLE_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching,userId) => {
    return {
        type:TOGGLE_FOLLOW_PROGRESS,
        isFetching,
        userId
    }
}

export default usersReducer;
