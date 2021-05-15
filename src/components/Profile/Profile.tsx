import React from 'react';
import main from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
    profilePage: {
        posts: { id: number, message: string | undefined, likesCount: number}[],
        newPostText:string | undefined,
    }
    addPost: () => void,
    updateNewPostText: (newText: string | undefined) => void,

};

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile;