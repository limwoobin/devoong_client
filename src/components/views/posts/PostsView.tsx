import React from 'react';
import MarkdownRender from '../../MarkdownRender';

const contents = `
    # H1 ~
    ## H2 zz
    ### H312e313rr
`;

export default function PostsView() {
    return (
        <>
            <MarkdownRender contents={contents} />
        </>
    )
}