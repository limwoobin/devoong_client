import React , {useState , useEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Posts from '../views/posts/Posts';
import { searchDataAsync } from '../reducer/postsReducer';

export default function PostsContainer() {
    let [data , setData] = useState({
        id: '',
        title: '',
        contents: '',
        views: 0
    });

    const dispatch = useDispatch();

    useEffect(() => {
       onSearchPosts();  
    })

    const {posts , lastId} = useSelector(state => state.postsReducer);

    const onSearchPosts = () => {
        console.log('onSearchPosts...');
        dispatch(searchDataAsync());
    }

    const onPostsClick = (id: string , title: string , contents: any , views: number) => {
        setData({
            id: id,
            title: title,
            contents: contents,
            views: views
        })
    }

    return (
        <>
            <Posts />
        </>
    )
}