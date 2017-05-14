import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>The secret feature! {this.props.message}</div>
    );
  }
}

function mapStateToProps(state) {
  return { message: state.message.authenticatedMessage };
}

export default connect(mapStateToProps, actions)(Feature);