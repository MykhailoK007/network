import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";


let store ={
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
        },
        users:{
            users:[
                {id:1, name:'Vasya', follow:true, location:{city:'Lviv', country:'Ukraine'}},
                {id:2, name:'Petro', follow:true, location:{city:'Kyiv', country:'Ukraine'}},
                {id:3, name:'Pavlo', follow:true, location:{city:'Minsk', country:'Belarus'}}
            ]
        }

    },

    getState(){
        return this._state;
    },

    _callSubscribe(){
        },

        subscribe(observer){
            this._callSubscribe = observer;
        },

    dispatch(action){
            this._state.profile = profileReducer(this._state.profile,action);
            this._state.dialogs = dialogReducer(this._state.dialogs,action);
            this._state.friends = usersReducer(this._state.friends,action);

            this._callSubscribe(this._state);
    }

}







export default store;