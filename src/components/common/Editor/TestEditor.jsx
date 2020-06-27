import React , { useState , useRef } from 'react';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor'

const TestEditor = () => {

    const [contentHtml , setContentHtml] = useState('');

    const handleChange = (e) => {
        console.log(e);
    }



    return (
        <>
            <Editor
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
                onChange={handleChange}
            />
        </>
    )
}


export default TestEditor;



