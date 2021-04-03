import React from 'react';
import '../MainPage.scss';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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

export default function ChipsPc() {
    const classes = useStyles();

    return (
        <aside className="pDRpR">
            <section className="fNlsam kPSwsK">
                <h4>Tag</h4>
                <div className={classes.root}>
                    <Chip
                        className="chip"
                        variant="outlined"
                        size="small"
                        label="Primary clickable"
                        clickable
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="small"
                        label="clickable"
                        clickable
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="small"
                        label="Pri"
                        clickable
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="small"
                        label="Primary"
                        clickable
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="small"
                        label="Primary clickable"
                        clickable
                        color="primary"
                    />
                    <Chip
                        variant="outlined"
                        size="small"
                        label="Primary clickable"
                        clickable
                        color="primary"
                    />
                </div>
            </section>
        </aside>
    )
}