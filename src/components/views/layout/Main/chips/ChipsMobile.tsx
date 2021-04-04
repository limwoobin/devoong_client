import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff4400',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});

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
    },
  }),
);

export default function ChipsMobile() {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <Chip
                className="chip"
                size="small"
                label="Primary clickable"
                clickable
                color="default"
            />
            <Chip
                size="small"
                label="clickable"
                clickable
                color="secondary"
            />
            <Chip
                size="small"
                label="Pri"
                clickable
                color="primary"
            />
            <Chip
                size="small"
                label="Primary"
                clickable
                color="primary"
            />
            <Chip
                size="small"
                label="Primary clickable"
                clickable
                color="primary"
            />
            <Chip
                size="small"
                label="Primary clickable"
                clickable
                color="primary"
            />
        </div>
    )
}