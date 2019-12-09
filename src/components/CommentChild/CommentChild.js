import React from 'react'
import CommentBaseContent from '../CommentBaseContent/CommentBaseContent'
import styles from './CommentChild.module.css'
import { uuid } from 'uuidv4'

export default (props) => {
    return(
        props.data.map(child =>
            <CommentBaseContent
                key={uuid()}
                className={styles.commentChild}
                data={child}
            />
        )
    )
}