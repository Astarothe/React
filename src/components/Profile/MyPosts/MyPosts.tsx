import React from 'react';
import main from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



type MyPostsPropsType = {
    posts: { likesCount: number, id: number, message: string | undefined }[],
    newPostText: string | undefined,
    dispatch(action:object) : void,
};

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.posts.map((p:{likesCount: number, message:string | undefined }) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement: React.RefObject<HTMLTextAreaElement> = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={main.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="" id="" />
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