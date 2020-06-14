import React, { useState , useEffect } from 'react';
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
import './ToastEditor.css';

let toastEditor;

const hookEditor = () => {
    
    const [content , setContent] = useState('');

    useEffect(() => {
        toastEditor = new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'wysiwyg', // 'markdown'
            previewStyle: 'vertical',
            height: '700px',
            exts: ['colorSyntax'],
            plugins: [[codeSyntaxHighlight , { hljs }]],
            language: 'ko-KR'
        });
    } , []);

    const saveArticle = () => {
        const content = toastEditor.getHtml();
        console.log(content)
        setContent(content);
    };

    return (
        <div id="toastEditor">
            <div id="editSection"></div>
            <button onClick={saveArticle} className="btn_save">Save</button>
            <div>
                <h2>result</h2>
                <textarea className="tf_result" value={content} readOnly="readOnly"></textarea>
            </div>
        </div>
    )
}

export default hookEditor;