import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Posts from './Posts';

const featuredPosts =  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
};

export default function PostsContainer() {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Posts key={featuredPosts.title} post={featuredPosts} />
                    <Posts key={featuredPosts.title} post={featuredPosts} />
                    <Posts key={featuredPosts.title} post={featuredPosts} />
                    <Posts key={featuredPosts.title} post={featuredPosts} />
                    <Posts key={featuredPosts.title} post={featuredPosts} />
                </Grid>
            </Container>
        </>
    );
}