import React from 'react';
import {Route} from 'react-router-dom'
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";

export default () => {
    return (
        <div>
            <Route path="/post" Component={CommentBox} />
            <Route path="/" Component={CommentList} />
        </div>
    )
};