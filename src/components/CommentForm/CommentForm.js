import React from 'react'
import { Form, Field } from 'react-final-form'

export default (props) => {
  return (
    <Form
      onSubmit={props.onSubmit}
      render={({ handleSubmit, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>
        <div>
            <Field
              autoFocus={true}
              name="commentInput"
              component="input"
              type="text"
              placeholder="Enter your comment"
            />
          <button
            type="submit"
            disabled={submitting || pristine}
          >
            Enter
          </button>
        </div>
      </form>
      )}
    />
  )
}