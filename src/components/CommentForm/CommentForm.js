import React from 'react'
/* import Button from '../Button/Button'
import CommentInput from '../CommentInput/CommentInput'*/
import styles from './CommentForm.module.css' 
import { Form, Field } from 'react-final-form'

export default (props) => {
    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit, submitting, pristine}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
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