import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';

const MarkdownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
    h1 {
        color: white;
    }
`;

const markdown = `
# zzz
## zz222
### asdasdasd
일반 텍스트
**굵게**
\`\`\`
    코드블락
\`\`\`

*기울이기*

글자 \`배경색\`

> 인용문
>> 이건뭘까
`;

export default function MarkdownRender(props: any) {
    const { contents } = props;
    // const markdownContents = ;

    return (
        <MarkdownStyle>
            {/* <ReactMarkdown>{markdown}</ReactMarkdown> */}
            <ReactMarkdown>{contents}</ReactMarkdown>
        </MarkdownStyle>
    )
}