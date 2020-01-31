/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styles from './CommentItem.module.css'
import CommentHeader from '../CommentHeader'
import CommentForm from '../CommentForm'
import { ReactComponent as Dot } from '../../../imgs/dot.svg'

const CommentItem = (props) => {
  const [answering, setAnswer] = useState(false)
  const [editing, setEdit] = useState(false)

  const { comment, depth, setRollUp, rollUp } = props
  const dotArray = []
  for (let i = 0; i < depth; i++) {
    dotArray.push(
      <Dot
        key={`${i}${depth}`}
        style={{ marginRight: 12, marginTop: 13 }}
      />
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.dotWrapper}>
        {dotArray}
      </div>
      <div className={styles.commentItem}>
        <CommentHeader
          depth={depth}
          comment={comment}
          onEdit={() => setEdit(!editing)}
          onAnswer={() => setAnswer(!answering)}
          onRollUp={() => null}
          rollUp={rollUp}
          setRollUp={setRollUp}
        />
        {rollUp ? null : <div>{comment.text}</div> }

        {editing || answering ? (
          <CommentForm
            comment={comment}
            mode={editing ? 'edit' : 'answer'}
            action={editing ? () => setEdit(!editing) : () => setAnswer(!answering)}
          />
        ) : null}
      </div>
    </div>
  )
}

export default CommentItem
