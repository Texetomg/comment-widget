import React from 'react'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import Button from './Button'
import plusImg from '../../imgs/plus.svg'

class Comments extends React.Component {
  constructor () {
    super()
    this.state = {
      submit: false
    }
  }

  onSubmit = () => {
    const submit = this.state.submit
    this.setState({ submit: !submit })
  };

  render () {
    return (
      <div>
        <CommentList />
        {this.state.submit ? (
          <CommentForm action={this.onSubmit} />
        ) : (
          <Button
            type="submit"
            text="Add comment"
            alt="add"
            img={plusImg}
            css="addButton"
            action={this.onSubmit}
          />
        )}
      </div>
    )
  }
}

export default Comments
