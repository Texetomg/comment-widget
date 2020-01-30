import React from "react";
import { connect } from "react-redux";
import { fetchComments } from "../../../redux/actions";
//import styles from "./CommentList.module.css";
import CommentItem from "../CommentItem";

class CommentList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      components: [
        {
          commentId: "",
          rollUp: false
        }
      ]
    }
  }

  componentDidMount() {
    this.props.fetchComments();
    const stateArray = [];
    this.props.comments.map(comment => stateArray.push({
      commentId: comment.id,
      rollUp: false
    }))
    this.setState({components: stateArray})
  }

  componentDidUpdate(prevProps){
    const prevComments = prevProps.comments;
    const currComments = this.props.comments
    const newComment = (
      prevComments.filter(i=>currComments.indexOf(i)<0)
      .concat(currComments.filter(i=>prevComments.indexOf(i)<0))
    );

    if (newComment.length !== 0) {
      this.setState({
        components: [...this.state.components, ...[{
          commentId: newComment[0].id,
          rollUp: false
        }]]
      })
    }
  }

  setRollUp = (id) => {
    const newState = [];
    
    this.state.components.forEach(comment => {
      comment.commentId === id ? newState.push({
        commentId: comment.commentId,
        rollUp: !comment.rollUp
      }) : newState.push(comment)
    })
    this.setState({components: newState})
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
        
        for(let i = 0; i < this.state.components.length; i++){
          const childComments = this.findChilds(parentComment);
          if(parentComment.id === this.state.components[i].commentId){
            components.push(
              <CommentItem
                depth={depth}
                key={parentComment.id}
                comment={parentComment}
                setRollUp={this.setRollUp}
                rollUp={this.state.components[i].rollUp}
              />
            );
          }
          if (parentComment.id === this.state.components[i].commentId
            && !this.state.components[i].rollUp
            && childComments.length > 0){ 
              recursiveFilling(childComments);
              depth -= 1;
          } 
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
    return this.renderComments(parentComments);
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList);
