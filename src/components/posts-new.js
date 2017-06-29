import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderTitleField(field) {
    return <input type="text" />;
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field
            name="title"
            className="form-control"
            component="input"
            type="text" 
            id="title"
            />
            <label htmlFor="tags">Tags</label>
            <Field
              name="tags"
              className="form-control"
              component="input"
              type="text" 
              id="tags"
              />
            <label htmlFor="content">Content</label>
            <Field
              name="content"
              className="form-control"
              component="textarea"
              id="content"
              />
          </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);