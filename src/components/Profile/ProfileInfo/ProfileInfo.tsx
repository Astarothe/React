import React from 'react';
import main from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={main.contentImg} src="https://img.17qq.com/images/fhhhhhswpqy.jpeg" alt=""/>
            </div>
            <div className={main.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;