import React , { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import SelectCategory from '../../common/SelectCategory';
import ToastEditor from '../../common/Editor/ToastEditor';
import './BoardWrite.scss';

const styles = theme => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '200px',
        },
      },
      textField:{
        width: '50%',
      },
      progress: {
        margin: theme.spacing.unit * 2
      },
});

const BoardWrite = () => {

    const [value , setValue] = useState({
        title : '',
        userEmail : window.sessionStorage.getItem('loggedInUserEmail'),
        content : '',
        boardType : '',
    });

    const [conHtml , setConHtml] = useState('');

    const {title , userEmail , content , boardType} = value;

    const handleValueChange = (e) => {
      setValue({
        ...value , [e.target.name] : e.target.value
      })
    };

    const getContentHtml = (callBackContentHtml) => {
      contentSave(callBackContentHtml);
    };

    const getCategory = (category) => {
      setValue({
        ...value , boardType : category
      })
    }

    const contentSave = (contentHtml) => {
      console.log(value);
      
    }

    return (
        <div classes={styles.root}>
        <CssBaseline />
        <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#F6F6F6' , minHeight:'100%' , fontSize: '15px' , textAlign: 'left'}}>
            <div>
                <div>
                    <div className="content-editor keditor">
                      <div className="post-title">
                        <SelectCategory 
                          className="mce-category" 
                          role="button" 
                          type="notice" 
                          callBackCategory={getCategory}
                        />
                        <textarea 
                          className="textarea_tit" 
                          name="title" 
                          placeholder="제목을 입력하세요" 
                          style={{height: '42px'}} 
                          onChange={handleValueChange} 
                        />
                      </div>
                      <div className="post-editor">
                        <ToastEditor callBackContentHtml={getContentHtml} />
                      </div>
                    </div>
                </div>
            </div>
        </Typography>
        </Container>
        </div>
    )
}

export default BoardWrite;