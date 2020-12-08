import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi nigga how a y', likesCount: 18},
            {id: 2, message: 'hi nigga how a y', likesCount: 16},
            {id: 3, message: 'qq niga', likesCount: 12},
            {id: 4, message: 'it is my first post', likesCount: 11}
        ],
        newPostText: 'it-kama'
    },
    dialogsPage:{
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your progress'},
            {id: 3, message: 'Yo'}
        ]
    }
}

export let addPost = () => {
    let newPosts = {
       id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPosts);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;
