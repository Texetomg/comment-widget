import React from 'react';
import './App.css';
import Content from './components/Content/Content'
import CommentBlock from './components/CommentBlock/CommentBlock'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>Comment-widget</p>
      </header>
      <main className='App-main'>
        <Content/>
        <CommentBlock/>
      </main>
    </div>
  );
}

export default App;
