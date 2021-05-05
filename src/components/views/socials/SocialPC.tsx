import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import '../mainPage.scss';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

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

export default function SocialPC(props: any) {
    const classes = useStyles();
    const {socials} = props;

    return (
        <aside className="pDRpR">
            <section className="fNlsam kPSwsK">
                <h4>Social</h4>
                <div className={classes.root}>
                    {socials.map((data: any) => (
                        <Link display="block" variant="body1" href={data.url} key={data} target="_blank" color="inherit">
                            <Grid container direction="row" spacing={1} alignItems="center">
                                <Grid item>
                                    <data.icon />
                                </Grid>
                            <Grid item>{data.name}</Grid>
                            </Grid>
                        </Link>
                    ))}
                </div>
            </section>
        </aside>
    )
}