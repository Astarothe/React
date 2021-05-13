import React from 'react';
import dlg from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';

type DialogsPropsType = {
    dialogs: {id: number, name: string}[],
    messages: {id: number, message: string}[]
}

const Dialogs = (props: DialogsPropsType ) => {

        let dialogsElements = props.dialogs.map((d: { name: string, id: number }) => <DialogItem name={d.name} id={d.id}/>)

        let messagesElements = props.messages.map((m: { message: string; }) => <Message message={m.message}/>)

        return (
            <div className={dlg.dialogs}>
                <div className={dlg.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={dlg.messages}>
                    {messagesElements}
                </div>
            </div>
        )
    }
;

export default Dialogs;