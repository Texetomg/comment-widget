import React from "react";
import styles from "../CommentItem/CommentItem.module.css";
import CommentInfo from "../CommentInfo";
import { connect } from "react-redux";
import { delComment } from "../../../redux/actions";
import { currentTime } from "../../../helpers/currentTime";

const CommentHeader = props => {
  const {
    comments,
    comment,
    depth,
    onAnswer,
    onEdit,
    onRollUp,
    rollUp,
    setRollUp
  } = props;
  const disabled = comment.userId === comments.userId;

  const deleteComment = comment => {
    comment.text = "";
    comment.userName = "";
    comment.userAva = "";
    comment.date = currentTime();
    comment.deleted = true;
    if (disabled) props.delComment(comment);
  };

  return (
      <div className={styles.header}>
        <CommentInfo comment={comment} />
        {comment.deleted !== true ? (
        <div className={styles.controlButtons}>
          {depth !== 8 && !rollUp ? (
            <button
              onClick={onAnswer}
              className={styles.controlButton}>
              Ответить
            </button>
          ) : null}
          {disabled ? (
            <React.Fragment>
              <button
                onClick={onEdit}
                className={styles.controlButton}
              >
                Редактировать
              </button>
              <button
                onClick={() => {
                  if(window.confirm("Удалить комментарий?")){
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
            onClick={() => {
              onRollUp();
              setRollUp(comment.id)
            }}
          >
            { rollUp ? "Развернуть" : "Свернуть"}
          </button>
        </div>
        ): null}
      </div>
  );
};
const mapStateToProps = ({ comments }) => ({ comments });
export default connect(
  mapStateToProps,
  { delComment }
)(CommentHeader);
