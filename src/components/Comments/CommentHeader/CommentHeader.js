/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import styles from '../CommentItem/CommentItem.module.css'
import CommentInfo from '../CommentInfo'
import { delComment } from '../../../redux/actions'
import { currentTime } from '../../../helpers/currentTime'

const CommentHeader = (props) => {
  const {
    comment,
    onAnswer,
    onEdit,
    isOpen,
    setOpen,
    userInfo
  } = props

  const deleteComment = (oldComment) => {
    const comment = Object.assign({}, oldComment)

    comment.text = ''
    comment.userName = ''
    comment.userAva = ''
    comment.date = currentTime()
    comment.deleted = true
    props.delComment(comment)
  }

  return (
    <div className={styles.header}>
      <CommentInfo comment={comment} />
      <div className={styles.controlButtons}>
        {comment.depth !== 8 && isOpen ? (
          <button onClick={onAnswer} className={styles.controlButton}>
            Ответить
          </button>
        ) : null}
        {comment.userId === userInfo.userId ? (
          <React.Fragment>
            <button onClick={onEdit} className={styles.controlButton}>
              Редактировать
            </button>
            <button
              onClick={() => {
                if (window.confirm('Удалить комментарий?')) {
                  deleteComment(comment)
                }
              }}
              className={styles.controlButton}
            >
              Удалить
            </button>
          </React.Fragment>
        ) : null}
        <button
          className={styles.controlButton}
          onClick={setOpen}
        >
          {!isOpen ? 'Свернуть' : 'Развернуть'}
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = ({ userInfo }) => ({ userInfo })
export default connect(mapStateToProps, { delComment })(CommentHeader)
