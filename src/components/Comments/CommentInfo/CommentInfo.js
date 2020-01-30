/* eslint-disable react/prop-types */
import React from 'react'
import styles from './CommentInfo.module.css'
import logo from '../../../imgs/defaultAva.png'

const UserData = ({ comment }) => {
  const { userAva, userName, commentDate, deleted } = comment
  const deletedMessage = 'Комментарий был удален'
  return (
    <div className={styles.commentinfo}>
      <div className={styles.avatar}>
        <img src={userAva.length === 0 ? logo : userAva} alt="avatara" />
      </div>
      <div className={styles.username}>
        {deleted ? deletedMessage : userName}
      </div>
      <div className={styles.time}>{commentDate}</div>
    </div>
  )
}

export default UserData
