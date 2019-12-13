import React from 'react'
import styles from './CommentsList.module.css'
import Comment from '../Comment/Comment'

export default (props) => {
    const { comments } = props;

    const parents = comments.filter((comment) => (
        comment.parentId === ""
    ));

    return (
        <div className={styles.commentsList}>
            {parents.map((parent) => {
                const childs = comments.filter((comment) => (
                    comment.parentId === parent.id
                ));
                
                return (
                    <Comment
                        key={parent.id}
                        data={parent}
                        childs={childs}
                    />
                )
            })}
        </div>
    )
}