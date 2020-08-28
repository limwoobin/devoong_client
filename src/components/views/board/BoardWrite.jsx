import React , { useState } from './node_modules/react';
import CssBaseline from './node_modules/@material-ui/core/CssBaseline';
import Typography from './node_modules/@material-ui/core/Typography';
import Container from './node_modules/@material-ui/core/Container';
import SelectCategory from '../../common/SelectCategory';
import ToastEditor from '../../common/Editor/ToastEditor';
import './BoardWrite.scss';
import TestEditor from '../../common/Editor/TestEditor';

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

    const {title , userEmail , content , boardType} = value;

    const handleValueChange = (e) => {
      setValue({
        ...value , [e.target.name] : e.target.value
      })
    };

    const getContentHtml = (callBackContentHtml) => {
      setValue({
        ...value , content : callBackContentHtml
      })
    };

    const getCategory = (category) => {
      setValue({
        ...value , boardType : category
      })
    }

    const contentSave = () => {
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
                        <button color="teal" onClick={contentSave} className="sc-dnqmqq gzELJz btn_save">Save</button>
                        {/* <TestEditor /> */}
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