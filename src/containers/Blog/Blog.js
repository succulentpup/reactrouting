import React, { Component } from 'react';
import './Blog.css';
import Posts from "../Posts/Posts";

class Blog extends Component {
    render () {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li>
                                <a href={"/"}>Posts</a>
                                <a href={"/newpost"}>New Post</a>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Posts/>
            </div>
        );
    }
}

export default Blog;