import { useState } from 'react';
import { marked } from 'marked';
import initial from './initial.js';
import TitleBar from './TitleBar';

import  "./Markdown.scss";

marked.use({breaks:true})

export default function Markdown (){
  const [ markup, setMarkup] = useState(initial);
  const [ open, setOpen ] = useState(true);
  
  function onToggle(data){
    setOpen(data);
  }
  
  return(
    <div className="markdown">
      <h1 className="display-4 text-center">Markdown</h1>
      <div className="container">
        <div className="row gx-2">
          <div className="col-12 col-lg-6">
            <TitleBar title="Editor" onToggle={onToggle}/>
            <textarea name="editor" 
              id="editor" 
              value={markup}
              className={`bg-dark text-light ${open ? 'visible' : 'hidden'}`}
              onChange={(event) => setMarkup(event.target.value)}>
            </textarea>
          </div>
          <div className="col-12 col-lg-6">
            <TitleBar title="Preview"/>
            <div id="preview" className=" border py-1 px-3" dangerouslySetInnerHTML={{__html:marked.parse(markup)}}></div>
          </div>
        </div>
        </div>
    </div>
  )
}
