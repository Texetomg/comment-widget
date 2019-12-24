import React, { Component } from 'react';
import './App.css';
import commentsMock from './mocks/comments.json'
import CommentForm from './components/CommentForm/CommentForm'
import CommentsList from './components/CommentsList/CommentsList'
import { uuid } from 'uuidv4'
import  moment  from 'moment'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      parentId: '',
      person: 'Bogdan',
      comments: commentsMock,
    }
  }

  handleSubmit = parentId => event => { 
    const newComment = {
      id: uuid(),
      person: this.state.person,
      edited: 'false',
      text: event.commentInput,
      date: moment().format('lll'),
      parentId: parentId,
    }

    this.setState({
      comments: [...this.state.comments, newComment],
      parentId: ''
    })
  }

  setParentId = parentId => {
    this.setState({
      parentId: parentId
    })
  }

  delComment = commentId => {
    const filteredComments = this.state.comments.filter(comment => (
      comment.id !== commentId &&
      comment.parentId !== commentId
    ));

    this.setState({
      comments: [...filteredComments]
    })
  }

  changeComment = (event, id) => {
    let index = 0;
    for(let element of this.state.comments) {
      if (element.id === id){
        break;
      }
      index += 1;
    }

    let newArray = [...this.state.comments]
    newArray[index].comment = event.target.value;
    newArray[index].edited = true;

    this.setState({
      comments: [...newArray]
    })

  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>Comment-widget</p>
        </header>
        <main className='App-main'>
          <CommentsList
            comments={this.state.comments}
            changeComment={this.changeComment}
            delComment={this.delComment}
            setParentId={this.setParentId}
          />
          <CommentForm
            onSubmit={this.handleSubmit(this.state.parentId)}
          />
        </main>
      </div>
    );
  }
}

export default App;
