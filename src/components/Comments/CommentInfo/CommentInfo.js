import React from "react";
import styles from "./CommentInfo.module.css";
import logo from "../../../imgs/defaultAva.png"

const UserData = ({ comment }) => {
  const { userAva, userName, commentDate } = comment;

  return (
    <div className={styles.commentinfo}>
      <div className={styles.avatar}>
        <img src={userAva.length === 0 ? logo : userAva} alt="avatara" />
      </div>
      <div className={styles.username}>{userName}</div>
      <div className={styles.time}>{commentDate}</div>
    </div>
  );
};

export default UserData;
