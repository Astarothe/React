import React from 'react';
import Posts from "./Post.module.css";

type MessagePropsType = {
    message: string | undefined;
    likesCount: number;
}

const Post = (props: MessagePropsType) => {
    return (
        <div className={Posts.item}>
            <img className={Posts.userImg} src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt=""/>
            { props.message }
            <div>
                <span>Like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default Post;