import React from 'react';
import Header from './components/Header'
import Products from './components/Products'

import './css/app.scss'
import './css/style.scss'

class App extends React.Component{
  render(){
    return (
        <div className="main">
          <Header nickname="Admin" />
          <Products />
        </div>
    )
  }
}

export default App;
