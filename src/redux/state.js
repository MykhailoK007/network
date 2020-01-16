import {renderEntireTree} from "../render";

let state={

    profile:{
        MyPosts:[
            {id:1,text:'Hello this is my first post',likes:5},
            {id:2,text:'This is second',likes:10}
        ],
        newPostText:'Create post...'
    },
    dialog:[
        {id:1,name:'Misha'},
        {id:2,name:'Vasya'},
        {id:3,name:'Petro'}
    ]

}
export function addPost(textPost){
    let newPost={
        id:state.profile.MyPosts.length,
        text:textPost,
        likes:0
    }
    state.profile.MyPosts.push(newPost);
    renderEntireTree(state)
}

export function chanePostText(newText) {
    state.profile.newPostText=newText;
    renderEntireTree(state);

}

export default state;