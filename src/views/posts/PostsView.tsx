import React from 'react';
import MarkdownRender from '../MarkdownRender';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const contents = `
# H1 ~
## H2 zz
### H312e313rr
> # 1asdasd
>> ## asdasdasd
* zz
\`\`\` 
const a = function() {
    console.log('aaa');
}
\`\`\`

`;

export default function PostsView() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography component="div" style={{ height: '100vh' }}>
                    <MarkdownRender contents={contents} />
                </Typography>
            </Container>
        </React.Fragment>
    )
}