import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { DateUtils } from '@/core/utils/DateUtils';
import { DateType, TagType } from '@/core/enums';
import RenderTags from '@/views/tags/RenderTags';
import './posts.scss';

const useStyles = makeStyles({
	media: {
		minHeight: 300,
		maxHeight: 450,
	},
	card: {
		display: 'flex',
		maxWidth: 960,
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
				<Card className={classes.card}>
				<div className={classes.cardDetails}>
					<Link to={{ pathname: `/posts/${post.id}` }}>
						<CardMedia
							component="img"
							className={classes.media}
							image={post.bannerImage}
							title="Contemplative Reptile"
						/>
					</Link>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2" style={{ color: 'black' }}>
							{post.title}
						</Typography>
						<div style={{ height: '20px' }}></div>
						<Typography variant="body1" color="textPrimary" component="p">
							{DateUtils.convertDate(DateType.YEAR_MONTH_DATE , post.createdDate)}
						</Typography>
						<div style={{ paddingTop: '15px' }}>
							{post.tagsResponseList 
								? <RenderTags tags={post.tagsResponseList} tagType={TagType.VOLCANO} />
								: '' 
							}
						</div>
					</CardContent>
				</div>
			</Card>
		</Grid>
	);
}