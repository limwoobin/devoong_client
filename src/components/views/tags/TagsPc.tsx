import React from 'react';
import '../main.scss';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Tag } from 'antd';

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
                  <Tag color="magenta">magenta</Tag>
                    <Tag color="#670000"
                    style={{fontSize: '15px' , fontWeight: 'bold'}}
                    >#f50</Tag>
                  <Tag color="#f50">#f50</Tag>
                  <Tag color="lime">lime</Tag>
                  <Tag color="green">green</Tag>
                  <Tag color="cyan">cyan</Tag>
                  <Tag color="blue">blue</Tag>
                  <Tag color="geekblue">geekblue</Tag>
              </div>
          </section>
      </aside>
  )
}