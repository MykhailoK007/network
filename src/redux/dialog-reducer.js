const ADD_MESSAGE='ADD-MESSAGE';
const  UPDATE_TEXT_MESSAGE='UPDATE-TEXT-MESSAGE';

function dialogReducer(state,action) {
    switch(action.type){

        case ADD_MESSAGE:
            let newMessage={
                id:state.dialog[action.id-1].all.length+1,
                text:state.newMessageText
            }
            state.dialog[action.id-1].all.push(newMessage);
            state.newMessageText='';
            return state;
        case UPDATE_TEXT_MESSAGE:
            state.newMessageText=action.newText;
            return state;
        default:
            return state;
    }

}

export const addMessageActionCreator=(id)=>{
    return{
        type:ADD_MESSAGE,
        id:id
    }
}

export const updateTextMessageActionCreator=(text)=>{
    return{
        type:UPDATE_TEXT_MESSAGE,
        newText:text
    }
}


export default dialogReducer;