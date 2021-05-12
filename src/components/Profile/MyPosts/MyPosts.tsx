import React from 'react';
import main from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let postsElements = props.posts.map((p: { message: String; likesCount: Number; }) => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={main.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={main.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;