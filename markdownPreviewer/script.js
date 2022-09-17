const initialState = `
This is a Paragraph

> Block Quote!

**This is a Bolded Test**
# Heading 1
## Heading 2

- List item 1
- List item 2
- List item 3

[Visit my website](https://www.github.com/chijiokeegbo)

 This is an Inline \`<div></div>\`

This is a block of code

\`\`\`
    let s = 1;
    let y = 2;
    let a = s + y;

\`\`\`

![React](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
    `;


class App extends React.Component {
    //store everything in our tetarea in a state
    state ={
        text: initialState
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const {text} = this.state;
        const markdown = marked(text, {
            breaks: true
        })
        return (
            <div>
                <h2 className="text-center m-4">Convert your MarkDown</h2>
                <div className="row">
                    <div className="col-6">
                        <h5 className="text-center">Enter your marker: </h5>
                        <textarea className="form-control" id="editor"
                        value={text}
                        onChange={this.handleChange}/>
                    </div>
                    <div className="col-6" >
                        <h5 className="text-center">See the Result: </h5>
                        <div className="preview rounded"
                            dangerouslySetInnerHTML={{__html: markdown}} id="preview">
                            </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));