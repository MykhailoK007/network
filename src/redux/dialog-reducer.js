const ADD_MESSAGE = 'ADD-MESSAGE';
const  UPDATE_TEXT_MESSAGE = 'UPDATE-TEXT-MESSAGE';

let initalState={
    dialog:[
        {id:1,name:'Misha',all:[
                {id:1,text:'Hello'}
            ]},
        {id:2,name:'Vasya',all:[
                {id:1,text:"Hello"}
            ]},
        {id:3,name:'Petro',all:[
                {id:1,text:"Hello"}
            ]}
    ],
    newMessageText:''
}

function dialogReducer(state = initalState,action) {
    switch(action.type){

        case ADD_MESSAGE:{
            let newMessage = {
                id:state.dialog[action.id-1].all.length+1,
                text:state.newMessageText
            }
            let copyState={...state};
            copyState.dialog=[...state.dialog];
            copyState.dialog[action.id-1].all.push(newMessage);
            copyState.newMessageText = '';

            return copyState;
        }
        case UPDATE_TEXT_MESSAGE:{
            let copyState={...state};

            copyState.newMessageText = action.newText;
            return copyState;
        }
        default:
            return state;
    }

}

export const addMessageActionCreator = (id) => {
    return{
        type:ADD_MESSAGE,
        id:id
    }
}

export const updateTextMessageActionCreator = (text) => {
    return{
        type:UPDATE_TEXT_MESSAGE,
        newText:text
    }
}


export default dialogReducer;