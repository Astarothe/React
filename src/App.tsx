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
    posts: { id: number, message: string, likesCount: number}[],
    dialogs: { id: number, name: string }[],
    messages: { id: number, message: string }[]
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Route exact path={"/profile"} render={() => <Profile posts={props.posts}/>}/>
                    <Route exact path={"/dialogs"}
                           render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    <Route exact path={"/news"} render={() => <News/>}/>
                    <Route exact path={"/music"} render={() => <Music/>}/>
                    <Route exact path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
