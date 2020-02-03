/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../../redux/actions'
import * as d3 from 'd3'
import CommentItem from '../CommentItem'
// import styles from "./CommentList.module.css";

const RenderRow = ({ comments }) => {
  const array = []

  const recursive = (comments) => {
    comments.forEach(comment => {
      array.push(
        <CommentItem
          depth={comment.depth - 1}
          key={comment.id}
          comment={comment.data}
        />
      )
      if (comment.children) {
        recursive(comment.children)
      }
    })
  }
  if (comments.length > 0) {
    recursive(comments)
  }
  return (array)
}

class CommentList extends React.Component {
  constructor () {
    super()
    this.state = {
      comments: []
    }
  }

  updateState = () => {
    const stratify = d3.stratify()
      .id(d => d.id)
      .parentId(d => d.parentId)

    const structuredComments = stratify(this.props.comments)
    this.setState({ comments: [...structuredComments.children] })
  }

  componentDidMount () {
    this.props.fetchComments()
    this.updateState()
  }

  componentDidUpdate (prevProps) {
    const prevComments = prevProps.comments
    const currComments = this.props.comments
    const newComments = (
      prevComments.filter(i => currComments.indexOf(i) < 0)
        .concat(currComments.filter(i => prevComments.indexOf(i) < 0))
    )
    console.log(newComments)
    if (newComments[0]) {
      console.log(newComments)
      this.updateState()
    }
  }

  render () {
    return (<RenderRow comments={this.state.comments}/>)
  }
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList)
