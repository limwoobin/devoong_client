import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import './posts.scss';

const useStyles = makeStyles({
	media: {
		height: 300,
		maxHeight: 500,
	},
	card: {
		display: 'flex',
		maxWidth: 850,
	},
	cardDetails: {
		flex: 1,
	},
});

export default function PostsCard(props: any) {
	const classes = useStyles();
	const { post } = props;

	return (
		<Grid item xs={12} md={12} style={{ paddingBottom: '20px' }}>
			{/* <Link to={{ pathname: `/posts/${post.id}` , state: {id: post.id} }}> */}
			<Link to={{ pathname: `/posts/${post.id}` }}>
				<Card className={classes.card}>
				<div className={classes.cardDetails}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image="http://www.itworld.co.kr/files/itworld/2020/06_01/google-password-manager-primary-100841457-large.jpg"
							title="Contemplative Reptile"
						/>
						<CardContent>
							<Typography gutterBottom variant="h5" component="h2" style={{ color: 'black' }}>
								{post.title}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{post.createdDate}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<Button size="small" color="primary">
							View
						</Button>
					</CardActions>
					</div>
				</Card>
			</Link>    
		</Grid>
	);
}