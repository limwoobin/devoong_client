import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import './markdown.scss';

const MarkDownStyle = styled.div`
    font-size: 1rem;
    line-height: 2.5rem;
    h1 {
        color: white;
    }
`;


export default function MarkdownRender(props: any) {
    const { contents } = props;

    return (
        // <MarkDownStyle>
            <ReactMarkdown
            children={contents} />
        // </MarkDownStyle>
    )
}