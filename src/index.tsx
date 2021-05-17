import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

type stateType = {
    profilePage: {
        posts: [
            { id: number, message: string | undefined, likesCount: number },
            { id: number, message: string | undefined, likesCount: number },
        ]
        newPostText: string | undefined
    },
    dialogsPage: {
        dialogs: [
            { id: number, name: string },
            { id: number, name: string },
            { id: number, name: string },
            { id: number, name: string },
            { id: number, name: string },
            { id: number, name: string },
        ],
        messages: [
            { id: number, message: string },
            { id: number, message: string },
            { id: number, message: string },
            { id: number, message: string },
            { id: number, message: string },
            { id: number, message: string },
        ]
    },
    sidebar: {
        friends: [
            { name: string, avatar: string },
            { name: string, avatar: string },
            { name: string, avatar: string },
        ]
    }
}

let rerenderEntireTree = (state: any) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
