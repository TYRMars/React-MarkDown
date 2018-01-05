# React-MarkDown

React-MarkDown插件( 使用https://github.com/chjj/marked )

* React16

```JavaScript
//dangerouslySetInnerHTML
render(){
        const _markdown = marked('I am using __markdown__.')
        const _html = {__html:_markdown}
        return(
            <div>
                <span dangerouslySetInnerHTML={_html}></span>
            </div>
        )
}
```
