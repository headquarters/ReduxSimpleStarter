import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser(user, index) {
        return (
            <div className="card card-block" key={user.name + index}>
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">Company</p>
                <a className="button button-primary" href="">Email</a>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.users.map(this.renderUser)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);