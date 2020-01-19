import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";


let store={
    _state:{

        profile:{
            MyPosts:[
                {id:1,text:'Hello this is my first post',likes:5},
                {id:2,text:'This is second',likes:10}
            ],
            newPostText:''
        },
        dialogs:{
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

    },

    getState(){
        return this._state;
    },
    _callSubscribe(){
        },

    // addPost(){
    //
    //     let newPost={
    //         id:this._state.profile.MyPosts.length+1,
    //         text:this._state.profile.newPostText,
    //         likes:0
    //     }
    //     this._state.profile.MyPosts.push(newPost);
    //     this._state.profile.newPostText='Create post...';
    //     this._callSubscribe(this._state);
    //
    // },
    // chanePostText(newText) {
    //     this._state.profile.newPostText=newText;
    //     this._callSubscribe(this._state);
    //
    // },
    // addMessage(id){
    //     let newMessage={
    //         id:this._state.dialogs.dialog[id-1].all.length+1,
    //         text:this._state.dialogs.newMessageText
    //     }
    //     this._state.dialogs.dialog[id-1].all.push(newMessage);
    //     this._state.dialogs.newMessageText='Create message...'
    //     this._callSubscribe(this._state)
    // },
    // changeTextMessage(text){
    //     this._state.dialogs.newMessageText=text;
    //     this._callSubscribe(this._state);
    // },
    //


    subscribe(observer){
        this._callSubscribe = observer;
    },

    dispatch(action){
            this._state.profile=profileReducer(this._state.profile,action);
            this._state.dialogs=dialogReducer(this._state.dialogs,action);

            this._callSubscribe(this._state);
    }

}







export default store;