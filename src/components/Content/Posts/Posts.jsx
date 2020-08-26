import React from 'react';
import Post from './Post/Post';
import './Posts.scss';

const Posts = (props) => {
    return (
        <div className="posts">
            <div className="post-add">
                <h2>My posts</h2>
                <textarea placeholder="Your text"></textarea>
                <button type="button">Add post</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;