import React from 'react'
import marked from 'marked'
import InputMark from './component/inputmark'
import OutputMark from './component/outputmark'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            _markdown:null
        }
        this.markdown = this.markdown.bind(this)
    }
    markdown(_mark){
        this.setState({
            _markdown : marked(_mark)
        })
    }
    render(){
        return(
            <div>
                <InputMark in={this.markdown}/>
                <OutputMark _markdown={this.state._markdown}/>   
            </div>
        )
    }
}

export default App