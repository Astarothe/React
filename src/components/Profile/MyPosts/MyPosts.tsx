import React from 'react';
import main from "./MyPosts.module.css";
import Post from "./Post/Post";

type MyPostsPropsType = {
    posts: { likesCount: number, id: number, message: string | undefined }[];
    addPost: (postMessage: string | undefined) => void
};

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((p:{likesCount: number, message:string | undefined }) => <Post message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        let text = newPostElement.current?.value;
        props.addPost(text);
    };

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    return (
        <div className={main.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} name="" id=""></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={main.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;