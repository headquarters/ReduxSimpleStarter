import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signupUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">{this.props.errorMessage}</div>
    }
  }

  render() {
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;
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
                <div>
                    <label htmlFor="passwordConfirm">Confirm Password:</label>
                    <input {...passwordConfirm} className="form-control" type="password" id="passwordConfirm" name="passwordConfirm" />
                    {passwordConfirm.touched 
                      && passwordConfirm.error
                      && <div className="error">{passwordConfirm.error}</div>}
                </div>
                {this.renderAlert()}
            </fieldset>
            <button action="submit" className="btn btn-primary">Sign up</button>
        </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

function validate(formProps) {
  let errors = {};

  if (formProps.password !== formProps.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match';
  }

  return errors;
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
}, mapStateToProps, actions)(Signup);