import React from 'react'
import styles from './CommentInput.module.css'

export default (props) => {
    return (
        <input
            required={true}
            type='text'
            className={styles.commentInput}
            name={props.name}

        />
    )
}