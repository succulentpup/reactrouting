import React, {Component} from 'react';
import {Route, NavLink} from "react-router-dom";

import './Blog.css';
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";

class Blog extends Component {
    render() {
        return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="my-active"
                                    activeStyle={{color: '#fa923f', textDecoration: 'underline'}}
                                >Posts</NavLink>
                            </li>
                            <li>
                                <NavLink to={{
                                    pathname: "/newpost",
                                    search: '?',
                                    hash: '#submit'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={()=> <h1>Home</h1>}/>*/
                }
                <Route path="/" exact component={Posts}/>
                < Route
                    path="/newpost"
                    component={NewPost}
                />
            </div>
        );
    }
}

export default Blog;
