import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PostsCard from './PostsCard';

const featuredPosts =  {
    id: '123',
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'http://www.itworld.co.kr/files/itworld/2020/06_01/google-password-manager-primary-100841457-large.jpg',
    imageText: 'Image Text',
};

export default function Posts() {
    return (
        <>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <PostsCard key={featuredPosts.title} post={featuredPosts} />
                    <PostsCard key={featuredPosts.title} post={featuredPosts} />
                    <PostsCard key={featuredPosts.title} post={featuredPosts} />
                    <PostsCard key={featuredPosts.title} post={featuredPosts} />
                    <PostsCard key={featuredPosts.title} post={featuredPosts} />
                </Grid>
            </Container>
        </>
    )
}
