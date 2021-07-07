import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Posts.scss';

const useStyles = makeStyles({
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
});

export default function PostsCard(props: any) {
    const classes = useStyles();
    const { post } = props;

    return (
        // https://material-ui.com/getting-started/templates/album/
        <Grid item xs={12} md={6}>
            <Link to={`/posts/${post.id}`}>
                <Card className={classes.card}>
                <div className={classes.cardDetails}>
                    <CardContent>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph className="description">
                            {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                            <Button variant="contained" color="primary">READ MORE</Button>
                        </Typography>
                    </CardContent>
                </div>
                <Hidden xsDown>
                    <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
                </Hidden>
                </Card>
            </Link>    
        </Grid>
    )
}