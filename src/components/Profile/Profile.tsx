import React from 'react';
import main from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
    profilePage: {
        posts: { id: number, message: string | undefined, likesCount: number}[],
        newPostText:string | undefined,
    }
    dispatch(action:object) : void,

};

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText}  dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;