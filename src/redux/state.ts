import {rerenderEntireTree} from "../render";

type stateType = {
    profilePage: {
        posts: [
            {id:number, message: string | undefined, likesCount: number},
            {id:number, message: string | undefined, likesCount: number},
        ],
        newPostText: string | undefined
    },
    dialogsPage: {
        dialogs: [
            {id: number, name: string},
            {id: number, name: string},
            {id: number, name: string},
            {id: number, name: string},
            {id: number, name: string},
            {id: number, name: string},
        ],
        messages: [
            {id:number, message: string},
            {id:number, message: string},
            {id:number, message: string},
            {id:number, message: string},
            {id:number, message: string},
            {id:number, message: string},
        ]
    },
    sidebar: {
        friends: [
            {name:string, avatar: string},
            {name:string, avatar: string},
            {name:string, avatar: string},
        ]
    }
}

let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi? how are you?", likesCount: 0},
            {id: 2, message: "It's my first post", likesCount: 19}
        ],
        newPostText: "it-kamasutra.com"
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is your it-kamasutra?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Yo"},
            {id: 6, message: "Yo"},
        ]
    },
    sidebar: {
        friends: [
            {name: "Dimych", avatar: "https://semantic-ui.com/images/avatar2/large/matthew.png"},
            {name: "Andrew", avatar: "https://semantic-ui.com/images/avatar2/large/matthew.png"},
            {name: "Sveta", avatar: "https://semantic-ui.com/images/avatar2/large/matthew.png"},
           ]
    }

};

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string | undefined) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state)
}

export default state;