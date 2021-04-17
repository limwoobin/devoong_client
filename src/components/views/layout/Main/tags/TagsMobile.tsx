import React from 'react';
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
      backgroundColor: '#3d3d3d',
      paddingTop: '8px',
      paddingBottom: '8px',
    },
  }),
);

export default function TagsMobile() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Tag color="magenta">magenta</Tag>
            <Tag color="#f50">#f50</Tag>
            <Tag color="#f50">#f50</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
        </div>
    )
}