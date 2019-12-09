import React from 'react'
import CommentForm from '../CommentForm/CommentForm'
import CommentsList from '../CommentsList/CommentsList'

export default (props) => {
    return (
        <React.Fragment>
            <CommentsList comments={props.comments}/>
            <CommentForm onChange={props.onChange}/>
        </React.Fragment>    
    )
}
