import React from 'react'
import styles from './CommentsList.module.css'
import Comment from '../Comment/Comment'
import { uuid } from 'uuidv4'

export default (props) => {
    return (
        <div className={styles.commentsList}>
            {props.comments.map((comment, i) => 
                <Comment
                    key={uuid()}
                    data={comment}
                />
            )}
        </div>
    )
}