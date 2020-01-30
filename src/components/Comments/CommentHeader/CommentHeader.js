import React from "react";
import styles from "../CommentItem/CommentItem.module.css";
import CommentInfo from "../CommentInfo";
import { connect } from "react-redux";
import { delComment } from "../../../redux/actions";

const CommentHeader = props => {
  const {
    comments,
    comment,
    depth,
    onAnswer,
    onEdit,
    onRollUp,
    rollUp
  } = props;
  const itemIndex = comments.indexOf(comment);
  const disabled = comment.userId === comments.userId;

  const deleteComment = index => {
    if (disabled) props.delComment(index);
  };

  return (
    <div className={styles.header}>
      <CommentInfo comment={comment} />
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
              onClick={() => deleteComment(itemIndex)}
              className={styles.controlButton}
            >
              Удалить
            </button>
          </React.Fragment>
        ) : null}
        <button
          className={styles.controlButton}
        onClick={onRollUp}>{ rollUp ? "Развернуть" : "Свернуть"}</button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ comments }) => ({ comments });
export default connect(
  mapStateToProps,
  { delComment }
)(CommentHeader);