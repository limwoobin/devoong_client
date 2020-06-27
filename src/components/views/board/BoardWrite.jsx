import React , {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
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

const contentSave = () => {
  console.log('save');
}

const BoardWrite = () => {

    const [value , setValue] = useState({
        title : '',
        userEmail : '',
        content : '',
        boardType : '02',
    });

    const handleValueChange = (e) => {
      setValue({
        ...value , [e.target.name] : e.target.value
      })
    }

    const getContentHtml = () => {
      setValue({
        ...value , content : contentHtml
      }) 
    }

    const getCategory = (category) => {
      console.log(category);
      setValue({
        ...value , boardType : category
      })
    }
    
    return (
        <div classes={styles.root}>
        <CssBaseline />
        <Container maxWidth="md">
        <Typography component="div" style={{ backgroundColor: '#F6F6F6' , minHeight:'100%' , fontSize: '15px' , textAlign: 'left'}}>
            <div>
                <div>
                    <div className="content-editor keditor">
                      {/* <div className="btn-category">
                      </div> */}
                      <div className="post-title">
                        <SelectCategory 
                          className="mce-category" 
                          role="button" 
                          type="notice" 
                          category={getCategory}
                        />
                        <textarea className="textarea_tit" placeholder="제목을 입력하세요" style={{height: '42px'}} />
                      </div>
                      <div className="post-editor">
                        <ToastEditor contentHtml={getContentHtml} />
                        <button color="teal" onClick={contentSave} className="sc-dnqmqq gzELJz btn_save">Save</button>
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