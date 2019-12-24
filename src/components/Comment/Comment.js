import React from 'react'
import styles from './Comment.module.css'
import CommentBaseContent from '../CommentBaseContent/CommentBaseContent'

export default (props) => {
  const {
    data,
    childs,
    setParentId,
    delComment,
    changeComment
  } = props;

  return(
    <React.Fragment>
      <CommentBaseContent
        setParentId={setParentId}
        delComment={delComment}
        changeComment={changeComment}
        className={styles.parent}
        data={data}
      />
      {childs.length > 0 ?
        childs.map(child => (
          <CommentBaseContent
            setParentId={setParentId}
            delComment={delComment}
            changeComment={changeComment}
            key={child.id}
            className={styles.child}
            data={child}
          />
          ))
        : null
      }
    </React.Fragment>
  )
}
