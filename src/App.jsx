import './App.css';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { FaStar } from 'react-icons/fa';
import { FaCube } from 'react-icons/fa';
import { FaArrowCircleUp } from 'react-icons/fa';
import { marked } from 'marked';

function App() {

  const defaultMarkdown = `
  # Here there is my first Markdown!
  
  ## I'm learning how to use it!
  
  With Markdown we can write *italics texts* and **bold texts**.

  Here there is some code between backsticks \`<div></div>\`
  
  \`\`\`
  //this is multiline code:
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      returne multilineCode;
    }
  }
  \`\`\`

  You can also made *italic* or **bold**, or **_both_**, whoah!
  And feel free to go crazy ~~crossing stuff out~~.

  There is also [links](www.freecodecamp.com) and 
  > Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) 


  `

  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

marked.setOptions ({
  breaks: true
})

  return (
    <div>
        <h1 className="title">My First Markdown Previewer</h1>
        <div className="boxes-container">
        <div className="editor-wrapper">
          <div className="toolbar"><FaCube />Editor<FaArrowCircleUp /></div>
          <textarea 
          name="editor" 
          id="editor"
          value={markdownText}
          onChange={(e) => setMarkdownText(e.target.value)}
          ></textarea>
        </div>
        <div id="preview" className="prewiew-wrapper"
        dangerouslySetInnerHTML={{
          __html: marked(markdownText),
        }}>
          
        </div> 
        </div>
    </div>
  );
}

export default App;
