const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

let initalState={
    MyPosts:[
        {id:1,text:'Hello this is my first post',likes:5},
        {id:2,text:'This is second',likes:10}
    ],
    newPostText:''
}

function profileReducer(state=initalState,action){
    switch (action.type){
        case ADD_POST:{
            let newPost = {
                id:state.MyPosts.length+1,
                text:state.newPostText,
                likes:0
            }
            let copyState={...state};
            copyState.MyPosts=[...state.MyPosts];

            copyState.MyPosts.push(newPost);
            copyState.newPostText = '';
            return copyState
        }

        case UPDATE_TEXT_POST: {
            let copyState={...state};
            copyState.newPostText = action.newText;

            return copyState;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type:ADD_POST
    }
}
export const updateTextPostActionCreator = (text) => {
    return{
        type:UPDATE_TEXT_POST,
        newText:text
    }
}

export default profileReducer;
