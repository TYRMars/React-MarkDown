import React from 'react'
import ReactDOM  from 'react-dom';

class InputMark extends React.PureComponent {
    constructor(props){
        super(props)
        this.update = this.update.bind(this)
    }
    update(){
        const Textarea = ReactDOM.findDOMNode(this.refs.Textarea).value;
        console.log(Textarea.value)
        this.props.in(Textarea)
    }
    render(){
        return(
            <div>
                <textarea className="textarea" ref="Textarea" onChange={this.update}/>
            </div>
        )
    }
}

export default InputMark
