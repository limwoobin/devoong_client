import React from 'react';
import '../layout.scss';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
  }),
);

export default function TagsPc() {
  const classes = useStyles();

  return (
      <aside className="pDRpR">
          <section className="fNlsam kPSwsK">
              <h4>Tag</h4>
              <div className={classes.root}>
                <Tag color="#670000"
                style={{fontSize: '15px' , fontWeight: 'bold'}}
                >
                  <Link to="/tags/1">#f50</Link>
                </Tag>
              </div>
          </section>
      </aside>
  )
}