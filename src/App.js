import React, { Component } from 'react';
import './App.css';
import CommentsBlock from './components/CommentsBlock/CommentsBlock'
import commentsMock from './mocks/comments.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      person : 'Bogdan',
      comment : {
        date : '',
        text : '',
      },
      comments : commentsMock
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name.text]: event.target.value,
      [event.target.name.date]: Date.now(),
    })
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>Comment-widget</p>
        </header>
        <main className='App-main'>
          <CommentsBlock
            onChange={this.handleInputChange}
            comments={this.state.comments}
          />
        </main>
      </div>
    );
  }
}

export default App;
