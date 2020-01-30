/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'
import { addComment, editComment } from '../../../redux/actions'
import styles from './CommentForm.module.css'
import { currentTime } from '../../../helpers/currentTime'
import { generateId } from '../../../helpers/generateId'
import plusImg from '../../../imgs/plus.svg'
import attachImg from '../../../imgs/attach.svg'
import Button from '../Button'

class CommentForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: this.props.mode === 'edit' ? props.comment.text : ''
    }
  }

  handleChange = e => {
    this.setState({ comment: e.target.value })
  };

  handleSubmit = e => {
    const { userAva, userName } = this.props.userInfo
    const id =
      this.props.mode === 'edit' ? this.props.comment.id : generateId()
    const parentId = this.props.mode === 'answer' ? this.props.comment.id : ''
    const comment = {
      id: id,
      userAva: userAva,
      userName: userName,
      commentDate: currentTime(),
      text: this.state.comment,
      parentId: parentId
    }

    e.preventDefault()
    if (this.props.mode === 'edit') {
      if (comment.text === '') comment.text = '.'
      this.props.editComment(comment)
    } else if (this.state.comment !== '') {
      this.props.addComment(comment)
      this.setState({ comment: '' })
    }

    this.props.action()
  };

  render () {
    const style =
      this.state.comment.length > 0 ? 'addButton' : 'addButton_inactive'

    return (
      <div className={styles.commentForm}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.inputLine} />
          <textarea
            className={styles.formInput}
            onChange={this.handleChange}
            type="text"
            placeholder="Write something..."
            value={this.state.comment}
          />
          <Button
            type="submit"
            text="Add comment"
            alt="add"
            img={plusImg}
            css={style}
          />
          <Button
            type="button"
            text="Прикрепить файл"
            alt="add"
            img={attachImg}
            css="attachButton"
          />
        </form>
      </div>
    )
  }
}
const mapStateToProps = ({ userInfo }) => ({ userInfo })

export default connect(mapStateToProps, { addComment, editComment })(
  CommentForm
)
