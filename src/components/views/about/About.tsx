import React from 'react';
import './about.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MarkdownRender from '../../MarkdownRender';

const contents = `

`;

export default function About() {
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