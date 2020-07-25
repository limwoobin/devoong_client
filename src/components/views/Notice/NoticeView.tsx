import React , { useState , useEffect } from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import { API } from '../../../api/Call_API';
// import { Func } from '../../../common/common';
// import Comment from '../comment/Comment';
// import CommentWrite from '../comment/CommentWrite';
import './NoticeView.scss';

type BoardAction = {
    
}

const NoticeView : React.FC = (props: any) => {
    const [form , setForm] = useState({
        _id: '',
        id: props.match.params.id,
        views: 0,
        userEmail: '',
        comments: [],
        boardType: '',
        title: '',
        content: '',
        regDate: '',
    });

    const {_id , id , views , userEmail , comments , boardType , title , content , regDate } = form;

    return (
        <div>

        </div>
    )
}

export default NoticeView;