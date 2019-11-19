import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

//component -> state, lifecycle, UI

class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
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