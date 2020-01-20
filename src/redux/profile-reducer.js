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
        case ADD_POST:
            let newPost = {
                id:state.MyPosts.length+1,
                text:state.newPostText,
                likes:0
            }
            state.MyPosts.push(newPost);
            state.newPostText = '';
            return state

        case UPDATE_TEXT_POST:
            state.newPostText = action.newText;
            return state;
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
