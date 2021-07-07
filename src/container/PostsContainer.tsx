import React , {useState} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Posts from '../views/posts/Posts';
import { searchDataAsync } from '../reducer/postsReducer';

export default function PostsContainer() {
    let [inputData , setInputData] = useState({
        id: '',
        title: '',
        contents: '',
        views: 0
    });

    const dispatch = useDispatch();

    const {posts , lastId} = useSelector(state => state.postsReducer);

    const onSearch = () => {
        dispatch(searchDataAsync());
    }

    return (
        <>
        </>
    )
}