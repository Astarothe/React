import React from 'react';
import main from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
    state: {
        posts: { id: number, message: string | undefined, likesCount: number}[],
    }
    addPost: (postMessage: string | undefined ) => void,
};

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;