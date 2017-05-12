import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">{this.props.errorMessage}</div>
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input {...email} className="form-control" type="text" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input {...password} className="form-control" type="password" id="password" name="password" />
                </div>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </fieldset>
        </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);