import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";

type AppPropsType = {
    state: {
        profilePage: {
            posts: { id: number, message: string, likesCount: number }[],
        },
        dialogsPage: {
            dialogs: { id: number, name: string }[],
            messages: { id: number, message: string }[]
        }
    }
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route exact path={"/profile"} render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route exact path={"/dialogs"}
                           render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route exact path={"/news"} render={() => <News/>}/>
                    <Route exact path={"/music"} render={() => <Music/>}/>
                    <Route exact path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
