import React from 'react'
import ReactDOM from 'react-dom';
import Markd from './Markd'

class App extends React.Component{
  constructor(props){
      super(props)
      this.state = {
        _markdown:null
      }
      this.update = this.update.bind(this)
  }
  update(){
      const Textarea = ReactDOM.findDOMNode(this.refs.Textarea).value;
      this.setState({
        _markdown:Textarea
      })
  }
    render(){
        return(
            <div>
                <textarea className="textarea" ref="Textarea" onChange={this.update}/>
                <Markd word={this.state._markdown}/>
            </div>
        )
    }
}

export default App
