
const initialState = `
    This is a Paragraph
    ** This is Bolded Text **

    #Heading

    ## Heading 2

    - Title itme 1
    - Title item 2
    - Title item 3

    [Visit my website](github.com/chijiokeegbo)

    this is an inline '\<div></div>'

    this is a block of code

    \`\`\`
        let s = 1;
        let y = 2;

        let a = s + y;
    \`\`\`

    ![React](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;


marked.setOptions({
    breaks: true
});
const renderer = new marked.Renderer(editor);

function App(){
const [editor, setText] = React.useState("")

    return (
        <div className="text-center px-4">
            <h4 className="p-4"> My Mark Down Previewer</h4>
            <textarea
            name="text"
            id="editor"
            rows="10"
            value={editor}
            onChange={(e) => setText(e.target.value)}
            className="textarea"
            ></textarea>
            <h3 className="mt-3">OutPut</h3>
            <Preview markdown={editor}/>
        </div>
    );
}

function Preview({markdown}){
    return(
        <div
        dangerouslySetInnerHTML={{
            __html: marked(markdown, {renderer: renderer}),
        }}
        id="preview"
        ></div>
    );
}

ReactDOM.render(<App/>, document.getElementById("app"))