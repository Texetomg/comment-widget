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
      person : 'Bogdan',
      comments : commentsMock
    }
  }

  handleSubmit = event => { 
    const newAccount = {
      id: uuid(),
      person: this.state.person,
      text: event.commentInput,
      date: moment().format('lll'),
      childrens: []
    }

    this.setState({
      comments: [...this.state.comments, newAccount]
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
          />
          <CommentForm
            onSubmit={this.handleSubmit}
          />
        </main>
      </div>
    );
  }
}

export default App;
