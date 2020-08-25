import React from 'react';
import Post from './Post/Post';
import './Posts.scss';

const Posts = (props) => {
    return (
        <div className="main__posts">
            <div className="add-post">
                <h2>My posts</h2>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <Post />
        </div>
    )
}

export default Posts;