import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from "react-router-dom";

import './Blog.css';
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";

// import FullPost from "../FullPost/FullPost";

class Blog extends Component {
    state = {
        auth: false
    };

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
                <Switch>
                    {this.state.auth ?
                        < Route
                            path="/newpost"
                            component={NewPost}
                        /> : <Redirect to="/" from="/newpost"/>}
                    <Redirect to="/" from="/posts"/>
                    <Route path="/" component={Posts}/>
                    {/*<Route path="/:postId" exact component={FullPost}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;
