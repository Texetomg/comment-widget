import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../../redux/actions";
//import styles from "./CommentList.module.css";
import CommentItem from "../CommentItem";

class CommentList extends React.Component {
  componentDidMount() {
    this.props.fetchComments();
  }

  findChilds = parentComment => (
    this.props.comments.filter(childComment =>
      parentComment.id === childComment.parentId
    )
  );

  renderComments = comments => {
    const components = [];
    let depth = -1;

    const recursiveFilling = parents => {
      depth += 1;
      parents.forEach(parentComment => {
        const childComments = this.findChilds(parentComment); 
        components.push(
          <CommentItem
            depth={depth}
            key={parentComment.id}
            comment={parentComment}
          />);
        if(childComments.length > 0){ 
          recursiveFilling(childComments);
          depth -= 1;
        }       
      });
      return components;
    }
    return recursiveFilling(comments)
  };

  render() {
    const parentComments = this.props.comments.filter(
      comment => comment.parentId === ""
    );
    console.log(this.renderComments(parentComments))
    return this.renderComments(parentComments);
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList);
