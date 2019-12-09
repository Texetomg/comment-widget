import React, { Component } from 'react';
import './App.css';
import commentsMock from './mocks/comments.json'
import CommentForm from './components/CommentForm/CommentForm'
import CommentsList from './components/CommentsList/CommentsList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      person : 'Bogdan',
      comment : {
        text : '',
      },
      comments : commentsMock
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name.text]: event.target.value,
    })
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>Comment-widget</p>
        </header>
        <main className='App-main'>
          <CommentsList comments={this.state.comments}/>
          <CommentForm onChange={this.handleInputChange}/>
        </main>
      </div>
    );
  }
}

export default App;
