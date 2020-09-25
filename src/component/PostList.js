import React from "react";
import { connect } from 'react-redux'
import {fetchPosts} from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component{
  componentDidMount() {
    this.props.fetchPosts();
  }

  rendList() {
    return this.props.posts.map(post => {
      return (
        <div key={post.id}>
          <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId}/>
        </div>
      )
    })
  }

  render() {
    return <div>{this.rendList()}</div>
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
};

export default connect(mapStateToProps, {fetchPosts}) (PostList);
