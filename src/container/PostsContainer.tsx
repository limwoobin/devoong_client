import React , {useState , useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PostsCard from '../views/posts/PostsCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Progress from '../views/Progress';
import { searchPostsAsync , getPostsAsync } from '../reducer/postsReducer';
import { PostsModel } from '../models';

export default function PostsContainer() {
    const dispatch = useDispatch();

    useEffect(() => {
        onSearchPosts();
    } , [])
    
    const onSearchPosts = () => {
        dispatch(searchPostsAsync());
    }

    const getPosts = (id: number) => {
        dispatch(getPostsAsync(id));
    }

    function renderPosts(posts: PostsModel[]) {
        if (posts.length > 0) {
            
            return posts.map((data) => (
                <PostsCard key={data.id} post={data} />
            ));    
        }
        
        return '데이터가없습니다...';
    }

    function renderProgress() {
        return (
            <div style={{ paddingLeft: '10%' , paddingRight: '10%' , paddingTop: '30%' }}>
                <Progress />
            </div>
        );
    }

    const { posts , isPostsLoading } = useSelector(state => state.postsReducer);

    return (
        <>
            {!isPostsLoading ? renderProgress() : 
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        {renderPosts(posts)}
                    </Grid>
                </Container>
            }
        </>
    )
}