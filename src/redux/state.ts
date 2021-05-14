let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi? how are you?", likesCount: 0},
            {id: 2, message: "It's my first post", likesCount: 19}
        ],
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

export default state;