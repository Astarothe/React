import React from 'react';
import dlg from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';

type DialogsPropsType = {
        state: {
            dialogs: {id: number, name: string}[],
            messages: {id: number, message: string}[]
        }
}

const Dialogs = (props: DialogsPropsType ) => {

        let dialogsElements = props.state.dialogs.map((d: { name: string, id: number }) => <DialogItem name={d.name} id={d.id}/>)

        let messagesElements = props.state.messages.map((m: { message: string; }) => <Message message={m.message}/>)

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