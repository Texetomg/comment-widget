/* eslint-disable react/prop-types */
import React from 'react'
import styles from './CommentItem.module.css'
import CommentHeader from '../CommentHeader'
import CommentForm from '../CommentForm'
import { ReactComponent as Dot } from '../../../imgs/dot.svg'

class CommentItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      answering: false
    }
  }

  reverseProp = key => {
    const obj = {}
    const currentValue = this.state[key]
    obj[key] = !currentValue
    this.setState(obj)
  }

  render () {
    const { editing, answering } = this.state
    const { comment, depth, setRollUp, rollUp } = this.props
    const dotArray = []
    for (let i = 0; i < depth; i++) {
      dotArray.push(
        <Dot
          key={`${i}${depth}`}
          style={{ marginRight: 12, marginTop: 13 }}
        />
      )
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
            onEdit={() => this.reverseProp('editing')}
            onAnswer={() => this.reverseProp('answering')}
            onRollUp={() => this.reverseProp('rollUp')}
            rollUp={rollUp}
            setRollUp={setRollUp}
          />
          {rollUp ? null : <div>{comment.text}</div> }

          {editing ? (
            <CommentForm
              comment={comment}
              mode={'edit'}
              action={() => this.reverseProp('editing')}
            />
          ) : answering ? (
            <CommentForm
              parentId={this.props.parentId}
              comment={comment}
              mode={'answer'}
              action={() => this.reverseProp('answering')}
            />
          ) : null}
        </div>
      </div>
    )
  }
}

export default CommentItem
