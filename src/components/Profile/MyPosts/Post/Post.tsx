import Posts from "./Post.module.css";

const Post = (props: any) => {
    return (

        <div className={Posts.item}>
            <img className={Posts.userImg} src="https://semantic-ui.com/images/avatar2/large/matthew.png" alt=""/>
            { props.message }
            <div>
                <span>Like</span>
            </div>
        </div>
    )
}

export default Post;