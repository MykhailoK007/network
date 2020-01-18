let renderEntireTree=()=>{

};
let state={

    profile:{
        MyPosts:[
            {id:1,text:'Hello this is my first post',likes:5},
            {id:2,text:'This is second',likes:10}
        ],
        newPostText:'Create post...'
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
    newMessageText:'Create message...'
},


}
export function addPost(){
    let newPost={
        id:state.profile.MyPosts.length+1,
        text:state.profile.newPostText,
        likes:0
    }
    state.profile.MyPosts.push(newPost);
    state.profile.newPostText='Create post...';
    renderEntireTree(state);

}

export function chanePostText(newText) {
    state.profile.newPostText=newText;
    renderEntireTree(state);

}
export function addMessage(id){
    let newMessage={
            id:state.dialogs.dialog[id-1].all.length+1,
            text:state.dialogs.newMessageText
    }
    state.dialogs.dialog[id-1].all.push(newMessage);
    state.dialogs.newMessageText='Create message...'
    renderEntireTree(state)
}

export  function changeTextMessage(text){
        state.dialogs.newMessageText=text;
        renderEntireTree(state);
}

export function subscribe(observer){
    renderEntireTree = observer;
}
export default state;