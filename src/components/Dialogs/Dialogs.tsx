import React from 'react';
import dlg from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from './Message/Message';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";
import {Debugger} from "inspector";

type DialogsPropsType = {
    store: any,
    dispatch(action: any): void,
}

const Dialogs = (props: DialogsPropsType) => {

        let state = props.store.getState().dialogsPage;

        let dialogsElements = state.dialogs.map((d: { name: string, id: number }) => <DialogItem name={d.name} id={d.id}/>)
        let messagesElements = state.messages.map((m: { message: string; }) => <Message message={m.message}/>)
        let newMessageBody = state.newMessageBody;

        let onNewMessageChange = (e: any) => {
            let body = e.target.value;
            props.store.dispatch(updateNewMessageBodyCreator(body));
        }
        let onSendMessageClick = () => {
            props.store.dispatch(sendMessageCreator());
        }
        return (
            <div className={dlg.dialogs}>
                <div className={dlg.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={dlg.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <div><textarea value={newMessageBody} onChange={onNewMessageChange}
                                       placeholder={"Enter your message"}></textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
;

export default Dialogs;