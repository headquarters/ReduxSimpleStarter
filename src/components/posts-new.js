import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field) {
    const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={field.id}>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          id={field.id}
          {...field.input} />
          <div className="text-help">
            {field.meta.touched && field.meta.error}
          </div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push("/");
    });    
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          label="Title"
          id="title"
          component={this.renderField}
          />
        <Field
          name="categories"
          label="Categories"
          component={this.renderField}
          id="categories"
          />
        <Field
          name="content"
          label="Content"
          component={this.renderField}
          id="content"
          />
          <button type="submit">Submit</button>
          <Link to="/">Cancel</Link>
      </form>
    )
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter a title";
  }

  if (!values.categories) {
    errors.categories = "Enter some categories";
  }

  if (!values.content) {
    errors.content = "Enter some content";
  }

  // if errors is empty, form will submit
  return errors;
}



export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);