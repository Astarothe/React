import React from 'react';
import main from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: "Hi? how are you?", likesCount: 0},
        {id: 2, message: "It's my first post", likesCount: 19},

    ];

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;