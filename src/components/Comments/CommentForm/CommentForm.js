/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addComment, editComment } from '../../../redux/actions'
import styles from './CommentForm.module.css'
import { currentTime } from '../../../helpers/currentTime'
import { generateId } from '../../../helpers/generateId'
import plusImg from '../../../imgs/plus.svg'
import attachImg from '../../../imgs/attach.svg'
import Button from '../Button'

const CommentForm = (props) => {
  const [text, setText] = useState(props.mode === 'edit' ? props.comment.text : '')
  const handleChange = ({ target }) => {
    setText(target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { mode, comment, action, userInfo, editComment, addComment } = props
    const id = mode === 'edit' ? comment.id : generateId()
    const parentId = mode === 'answer' ? comment.id
      : mode === 'add' ? '0'
        : comment.parentId

    const newComment = {
      id: id,
      userAva: userInfo.userAva,
      userName: userInfo.userName,
      commentDate: currentTime(),
      text: text,
      parentId: parentId,
      userId: userInfo.userId
    }

    if (mode === 'edit') {
      if (newComment.text === '') newComment.text = '.'
      editComment(newComment)
    } else if (newComment !== '') {
      addComment(newComment)
      setText('')
    }

    action()
  }

  const style = text.length > 0 ? 'addButton' : 'addButton_inactive'

  return (
    <div className={styles.commentForm}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputLine} />
        <textarea
          className={styles.formInput}
          onChange={handleChange}
          type="text"
          placeholder="Write something..."
          value={text}
        />
        <Button
          type="submit"
          text="Add comment"
          alt="add"
          img={plusImg}
          css={style}
        />
        <Button
          type="button"
          text="Прикрепить файл"
          alt="attach"
          img={attachImg}
          css="attachButton"
        />
      </form>
    </div>
  )
}
const mapStateToProps = ({ userInfo }) => ({ userInfo })

export default connect(mapStateToProps, { addComment, editComment })(
  CommentForm
)
