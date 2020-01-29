import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../../redux/actions";
//import styles from "./CommentList.module.css";
import CommentItem from "../CommentItem";

class CommentList extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  findChilds = parentComment =>
    this.props.comments.filter(childComment =>
      parentComment.id === childComment.parentId
    );

  renderComments = comments => {
    let arr = [];
    let depth = -1;

    const myf = parentComments => {
      depth +=1;
      parentComments.forEach(parentComment => { 
        const childComments = this.findChilds(parentComment); 
        arr.push(<CommentItem depth={depth} key={parentComment.id} comment={parentComment} />)
        if(childComments.length > 0){ 
          myf(childComments);
          depth -=1;
        } 
      });
      return arr;
    }
    return myf(comments)
  };

  render() {
    const parentComments = this.props.comments.filter(
      comment => comment.parentId === ""
    );
    return this.renderComments(parentComments);
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList);
