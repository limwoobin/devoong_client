import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
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

const useStyles2 = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			'& > *': {
				margin: theme.spacing(0.5),
			},
		},
	}),
);


export default function PostsCard(props: any) {
	const classes = useStyles();
	const classes2 = useStyles2();
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
						<div className={classes2.root} style={{ paddingTop: '15px' }}>
							{post.tagsResponseList 
								? <RenderTags tags={post.tagsResponseList} tagType={TagType.PURPLE} />
								: '' 
							}
						</div>
					</CardContent>
				</div>
			</Card>
		</Grid>
	);
}