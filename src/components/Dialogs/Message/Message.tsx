import React from 'react';
import dlg from "./../Dialogs.module.css";


type MessagePropsType = {
    message: String;
}

const Message = (props: MessagePropsType) => {
    return (
        <div className={dlg.message}>{props.message}</div>
    )
};

export default Message;