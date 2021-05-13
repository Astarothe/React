import React from 'react';
import main from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: { likesCount: number, id: number, message: string }[];
};

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((p:{likesCount: number, message:string }) => <Post message={p.message} likesCount={p.likesCount}/>)

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