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
import './posts.scss';

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
		<Grid item xs={12} md={6}>
			<Link to={{ pathname: `/posts/${post.id}` , state: {contents: post.contents , id: post.id} }}>
				<Card className={classes.card}>
				<div className={classes.cardDetails}>
					<CardContent>
						<Typography component="h2" variant="h5" style={{ color: 'black' }}>
							{post.title}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary">
							{post.createdDate}
						</Typography>
						<Typography variant="subtitle1" paragraph className="description">
							{post.contents}
						</Typography>
						<Typography variant="subtitle1" color="primary">
							<Button variant="contained" color="primary">READ MORE</Button>
						</Typography>
					</CardContent>
				</div>
				<Hidden xsDown>
					<CardMedia 
						className={classes.cardMedia} 
						image="http://www.itworld.co.kr/files/itworld/2020/06_01/google-password-manager-primary-100841457-large.jpg" 
					/>
				</Hidden>
				</Card>
			</Link>    
		</Grid>
	);
}