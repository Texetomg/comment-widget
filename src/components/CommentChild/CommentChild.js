import React from 'react'
import CommentBaseContent from '../CommentBaseContent/CommentBaseContent'
import styles from './CommentChild.module.css'

export default (props) => {
    return(
        props.data.map(child =>
            <CommentBaseContent
                key={child.id}
                className={styles.commentChild}
                data={child}
            />
        )
    )
}