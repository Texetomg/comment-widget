import React from 'react'
import styles from './CommentsList.module.css'
import Comment from '../Comment/Comment'

export default (props) => {
    return (
        <div className={styles.commentsList}>
            {props.comments.map((comment, i) => 
                <Comment
                    key={comment.id}
                    data={comment}
                />
            )}
        </div>
    )
}