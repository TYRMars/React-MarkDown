import React from 'react'
import ReactDOM from 'react-dom'
import marked from 'marked'

class Markd extends React.Component {
  constructor() {
    super()
    this.state = {
      _markdown: null
    }
    this.markdown = this.markdown.bind(this)
  }
  markdown() {
    this.setState({_markdown: marked(this.props.word)})
  }
  render() {
    const markdown = {__html:this.state._markdown}
    return (
      <div>
        <span dangerouslySetInnerHTML={markdown}></span>
      </div>
    )
  }
  componentDidMount(){
    this.markdown()
  }
}

export default Markd
