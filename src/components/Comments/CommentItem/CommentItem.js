import React from "react";
import styles from "./CommentItem.module.css";
import CommentHeader from "../CommentHeader";
import CommentForm from "../CommentForm";
import {ReactComponent as Dot} from "../../../imgs/dot.svg";


class CommentItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      answering: false
    };
  }

  onEdit = () => {
    const editing = this.state.editing;
    this.setState({ editing: !editing });
  };

  onAnswer = () => {
    const answering = this.state.answering;
    this.setState({ answering: !answering });
  };

  render() {
    const { editing, answering } = this.state;
    const { comment, depth } = this.props;
    let dotArray = [];

    for(let i = 0; i < depth; i++){
      dotArray.push(<Dot style={{marginRight: 12, marginTop: 13}}/>)
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
            onEdit={this.onEdit}
            onAnswer={this.onAnswer}
          />
          <div>{comment.text}</div>
          {editing ? (
            <CommentForm comment={comment} mode={"edit"} action={this.onEdit} />
          ) : answering ? (
            <CommentForm
              parentId={this.props.parentId}
              comment={comment}
              mode={"answer"}
              action={this.onAnswer}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default CommentItem;
