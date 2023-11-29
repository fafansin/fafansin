import { useState } from 'react';
import { marked } from 'marked';
import initial from './initial.js';
import { Accordion } from 'react-bootstrap';
import  "./Markdown.scss";

marked.use({breaks:true})

export default function Markdown (){
  const [ markup, setMarkup] = useState(initial)
  
  return(
    <div className="markdown">
      <h1 className="display-4 text-center">Markdown</h1>
      <Accordion defaultActiveKey={['0', '1']} alwaysOpen className="bg-secondary border">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Markdown Editor</Accordion.Header>
          <Accordion.Body>
            <textarea name="editor" 
              id="editor" 
              value={markup}
              onChange={(event) => setMarkup(event.target.value)}
              ></textarea>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Markdown Previewer</Accordion.Header>
          <Accordion.Body>
          <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(markup)}}></div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  )
}
