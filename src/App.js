import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          tweet list
        </Layout>
      </div>
    );
  }
}

export default App;
