/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { fetchComments } from '../../../redux/actions'
import * as d3 from 'd3'
import CommentItem from '../CommentItem'

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

    if (newComments[0]) {
      this.updateState()
    }
  }

  render () {
    return (this.state.comments.map(comment =>
      <CommentItem
        key={comment.id}
        comment={comment}
      />)
    )
  }
}

const mapStateToProps = ({ comments }) => ({ comments })

export default connect(
  mapStateToProps,
  { fetchComments }
)(CommentList)
