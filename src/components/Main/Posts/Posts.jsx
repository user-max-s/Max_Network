import React from 'react';

const Posts = (props) => {
    return (
        <div className="main__posts">
            <div className="add-post">
                <h2>My posts</h2>
                <textarea></textarea>
                <button>Send</button>
            </div>
            <div className="post">
                <img src="" />
                <p>Hey why nobody love me?</p>
            </div>
        </div>
    )
}

export default Posts;