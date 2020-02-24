import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

//component -> state, lifecycle, UI

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    ) 
  }
}

ReactDOM.render(
  //which element to render?
  //where to render it?
  <App />,
  document.getElementById('app')
)