import React from 'react';
import {NavLink} from 'react-router-dom';
import dlg from "./../Dialogs.module.css";

type DialogItemPropsType = {
    name: String;
    id: Number;
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={dlg.dialog + " " + dlg.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;