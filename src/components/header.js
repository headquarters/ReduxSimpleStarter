import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderSigninOrSignout() {
    if(!this.props.authenticated) {
      return <Link to="/signin">Sign in</Link>
    } else {
      return <Link to="/signout">Sign out</Link>
    }
  }

  render() {
    return (
        <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                  {this.renderSigninOrSignout()}
                </li>
                { !this.props.authenticated &&
                  <li className="nav-item">
                      <Link to="/signup">Sign up</Link>
                  </li>
                }
            </ul>
        </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.authenticated };
}

export default connect(mapStateToProps)(Header);