import React from 'react'
import styles from './Comment.module.css'
import CommentBaseContent from '../CommentBaseContent/CommentBaseContent'

export default (props) => {
  const { data, childs } = props;

  return(
    <React.Fragment>
      <CommentBaseContent
        className={styles.parent}
        data={data}
      />
      {childs.length > 0 ?
        childs.map(child => (
          <CommentBaseContent
            key={child.id}
            className={styles.child}
            parentId={data.id}
            data={child}
          />
          ))
        : null
      }
    </React.Fragment>
  )
}
