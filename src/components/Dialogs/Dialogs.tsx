import React from 'react';
import {NavLink} from 'react-router-dom';
import dlg from "./Dialogs.module.css";

type DialogItemPropsType = {
    name: String;
    id: Number;
}

type MessagePropsType = {
    message: String;
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dlg.dialog + " " + dlg.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props: MessagePropsType) => {
    return (
        <div className={dlg.message}>{props.message}</div>
    )
};

const Dialogs = () => {

        let dialogsData = [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Andrew"},
        ];

    let messagesData = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},
    ];


        return (
            <div className={dlg.dialogs}>
                <div className={dlg.dialogsItems}>
                    <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                    <DialogItem name={"Sasha"} id={4}/>
                    <DialogItem name={"Victor"} id={5}/>
                    <DialogItem name={"Valera"} id={6}/>
                </div>
                <div className={dlg.messages}>
                    <Message message={messagesData[0].message}/>
                    <Message message={messagesData[1].message}/>
                    <Message message={messagesData[2].message}/>
                </div>
            </div>
        )
    }
;

export default Dialogs;