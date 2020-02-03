/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import styles from './CommentItem.module.css'
import CommentHeader from '../CommentHeader'
import CommentForm from '../CommentForm'
import { ReactComponent as Dot } from '../../../imgs/dot.svg'

const CommentItem = (props) => {
  const [isAnswer, setAnswer] = useState(false)
  const [isEdit, setEdit] = useState(false)
  const [isOpen, setOpen] = useState(true)
  const { depth, data, children } = props.comment
  const dotArray = []

  for (let i = 0; i < depth - 1; i++) {
    dotArray.push(
      <Dot
        key={`${i}${depth}`}
        style={{ marginRight: 12, marginTop: 13 }}
      />
    )
  }

  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.dotWrapper}>
          {dotArray}
        </div>
        <div className={styles.commentItem}>
          <CommentHeader
            depth={depth}
            comment={data}
            setEdit={() => setEdit(!isEdit)}
            setAnswer={() => setAnswer(!isAnswer)}
            isOpen={isOpen}
            setOpen={() => setOpen(!isOpen)}
          />
          {isOpen ? <div>{data.text}</div> : null }

          {isEdit || isAnswer ? (
            <CommentForm
              comment={data}
              mode={isEdit ? 'edit' : 'answer'}
              action={isEdit ? () => setEdit(!isEdit) : () => setAnswer(!isAnswer)}
            />
          ) : null}
        </div>
      </div>
      {isOpen && children &&
          children.map(el => <CommentItem key={el.id} comment={el}/>)}
    </div>
  )
}

export default CommentItem
