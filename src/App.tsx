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
    store: any,
    dispatch(action: object): void,

}


function App(props: AppPropsType) {
    return (
        <div className="app-wrapper">

            <Header />
            <Navbar state={props.store._state.sidebar}/>
            <div className={"app-wrapper-content"}>
                <Route exact path={"/profile"}
                       render={() => <Profile profilePage={props.store._state.profilePage} dispatch={props.dispatch}/>}/>
                <Route exact path={"/dialogs"}
                       render={() => <Dialogs dispatch={props.dispatch}
                                              store={props.store}/>}/>
                <Route exact path={"/news"} render={() => <News/>}/>
                <Route exact path={"/music"} render={() => <Music/>}/>
                <Route exact path={"/settings"} render={() => <Settings/>}/>
            </div>
        </div>

    );
}

export default App;
