import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: {}
    };
  }

  componentDidMount() {
    this.props.fetchPosts((posts) => {
      this.setState({ posts });
    });
  }

  renderPosts() {
    return _.map(this.props.posts, (post) => {
      return (
        <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
      )
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.renderPosts()}
        </ul>
        <Link to="/posts/new">New Post</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);