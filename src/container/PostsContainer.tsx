import React , {useState , useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PostsCard from '../views/posts/PostsCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { searchPostsAsync , getPostsAsync } from '../reducer/postsReducer';

export default function PostsContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
       onSearchPosts();
    } , [])
    

    const onSearchPosts = () => {
        console.log('onSearchPosts...');
        dispatch(searchPostsAsync());
    }

    const getPosts = (id: number) => {
        dispatch(getPostsAsync(id));
    }

    const onPostsClick = (id: string , title: string , contents: any , views: number) => {
        
    }

    const { posts } = useSelector(state => state.postsReducer);

    function asd() {
        posts.map((c: any) => {
            console.log(c);
        })
    }

    return (
        <>
            {/* <PostsCard key={featuredPosts.id} post={featuredPosts} /> */}

            {/* <Posts /> */}
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    {posts.length > 0 && posts.map((data: any) => 
                        <PostsCard key={data.id} post={data} />
                    )}
                    {/* {posts.map((c: any) => {
                        <PostsCard key={c.id} post={c} />
                    })} */}
                </Grid>
            </Container>
        </>
    )
}