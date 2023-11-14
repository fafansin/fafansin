import { useState } from 'react';
import { marked } from 'marked';
import initial from './initial.js';

marked.use({breaks:true})
export default function Markdown (){
  const [ markup, setMarkup] = useState(initial)
  
  return(
    <div className="markdown">
      <textarea name="editor" 
        id="editor" 
        cols="30" 
        rows="10" 
        value={markup}
        onChange={(event) => setMarkup(event.target.value)}
        ></textarea>
      <div id="preview" dangerouslySetInnerHTML={{__html:marked.parse(markup)}}></div>
    </div>
  )
}
