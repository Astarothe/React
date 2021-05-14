import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import {Route} from "react-router-dom";


type AppPropsType = {
    state: {
        profilePage: {
            posts: { id: number, message: string | undefined, likesCount: number }[],
        },
        dialogsPage: {
            dialogs: { id: number, name: string }[],
            messages: { id: number, message: string }[]
        },
        sidebar: {
            friends: {name: string, avatar:string}[]
        }
    }
    addPost: (postMessage: string | undefined ) => void
}


function App(props: AppPropsType) {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className={"app-wrapper-content"}>
                    <Route exact path={"/profile"} render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                    <Route exact path={"/dialogs"}
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route exact path={"/news"} render={() => <News/>}/>
                    <Route exact path={"/music"} render={() => <Music/>}/>
                    <Route exact path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>

    );
}

export default App;
