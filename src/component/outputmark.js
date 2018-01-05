import React from 'react'

class OutputMark extends React.PureComponent {
    render(){
        const _html = {__html:this.props._markdown}
        return(
            <div>
                <span dangerouslySetInnerHTML={_html}></span>
            </div>
        )
    }
}

export default OutputMark