import React from 'react'
import styles from './CommentBaseContent.module.css'
import Button from '../Button/Button'

class CommentBaseContent extends React.Component{
  constructor(props){
    super(props)
    this.commentInput = null;
  }

  editComment = (refer) =>{
    refer.disabled = false;
    refer.focus();
  }

  handleBlur = () => {
    this.commentInput.disabled = true;
  }

  render() {
    const {
      id,
      edited,
      person,
      text,
      date,
      parentId
    } = this.props.data;
    return (
      <div className={this.props.className}>
        <div className={styles.description}>
          {person}
        </div>
        <input
          onChange={event => this.props.changeComment(event, id)} 
          onBlur={this.handleBlur}
          type='text'
          defaultValue={text}
          disabled={true}
          className={styles.customInput}
          ref={elem => (this.commentInput = elem)}
        />
        <div className={styles.bottomLine}>
          <div className={styles.description}>
            {date}
          </div>
          <div className={styles.description}>
            {edited === 'true' ? 'edited' : null}
          </div>
          <Button
            type='submit'
            action={() => (
              this.props.setParentId(parentId === '' ? id : parentId)
            )}
          >
            Ответить
          </Button>
          <Button
            type='button'
            action={() => (
              this.editComment(this.commentInput)
            )}
          >
            Редактировать
          </Button>
          <Button
            type='button'
            action={() => (
              this.props.delComment(id)
            )}
          >
            Удалить
          </Button>
        </div>
      </div>
    )
  }
}

export default CommentBaseContent;
