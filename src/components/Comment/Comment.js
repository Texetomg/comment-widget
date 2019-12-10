import React from 'react'
import styles from './Comment.module.css'
import CommentChild from '../CommentChild/CommentChild'
import CommentBaseContent from '../CommentBaseContent/CommentBaseContent'

export default (props) => {
    return(
        <div className={styles.comment}>
            <CommentBaseContent
                data={props.data}
            />
            <CommentChild
                data={props.data.childrens}
            />
        </div>
    )
}