import React, { useState , useEffect , useRef } from 'react';
import Editor from '@toast-ui/editor';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import python from 'highlight.js/lib/languages/python';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('java', java);
hljs.registerLanguage('python', python);
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import 'codemirror/lib/codemirror.css';
import './ToastEditor.css';

let toastEditor;

const TestEditor = (props) => {

    const contentSave = () => {
        const content = toastEditor.getHtml();
        props.callBackContentHtml(content);
    };

    useEffect(() => {
        toastEditor = new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'markdown', // 'markdown' , wysiwyg
            previewStyle: 'vertical',
            height: '700px',
            exts: ['colorSyntax'],
            plugins: [[codeSyntaxHighlight , { hljs }]],
            language: 'ko-KR',
        });
    } , []);

    return (
        <div id="toastEditor">
            <div id="editSection" />
            <button color="teal" onClick={contentSave} className="sc-dnqmqq gzELJz btn_save">Save</button>
        </div>
    )
}

export default TestEditor;