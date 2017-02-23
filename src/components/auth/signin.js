import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
  render() {
    return (
        <form>
            <fieldset className="form-group">
                <div>
                    <label for="email">Email:</label>
                    <input className="form-control" type="text" id="email" name="email" />
                </div>
                <div>
                    <label for="password">Password:</label>
                    <input className="form-control" type="text" id="password" name="password" />
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
})(Signin);