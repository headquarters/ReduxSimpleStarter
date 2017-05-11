import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;
    return (
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <fieldset className="form-group">
                <div>
                    <label for="email">Email:</label>
                    <input {...email} className="form-control" type="text" id="email" name="email" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input {...password} className="form-control" type="text" id="password" name="password" />
                </div>
                <button action="submit" className="btn btn-primary">Sign in</button>
            </fieldset>
        </form>
    );
  }
}

export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
}, null, actions)(Signin);