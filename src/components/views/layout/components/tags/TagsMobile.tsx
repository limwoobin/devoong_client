import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Tag } from 'antd';
import Chip from '@material-ui/core/Chip';
import '../layout.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
      // paddingTop: '8px',
      // paddingBottom: '8px',
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
            <Chip
              label="Rrimary"
              color="primary"
            />
            <Chip
              label="Secondary"
              color="secondary"
            />
            <Chip
              label="Default"
              color="default"
            />
        </div>
    )
}