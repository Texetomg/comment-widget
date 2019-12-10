import React, { Component } from 'react';
import './App.css';
import commentsMock from './mocks/comments.json'
import CommentForm from './components/CommentForm/CommentForm'
import CommentsList from './components/CommentsList/CommentsList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: '',
      person : 'Bogdan',
      text : '',
      comments : commentsMock
    }
  }

  handleInputChange = event => {
    console.log('123');
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    let d = Date.now();
    d = new Date(d);
    const chunks = [d.getDate(), d.getMonth() + 1, d.getFullYear()];
	  d = chunks.map(chunk => String(chunk).padStart(2, '0')).join('.');

    let newAccount = {
      person: this.state.person,
      text: this.state.text,
      date: d,
      childrens: []
    }
    console.log([...this.state.comments, newAccount])
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
            onChange={this.handleInputChange}
          />
        </main>
      </div>
    );
  }
}

export default App;
