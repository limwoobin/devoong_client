import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import '../layout.scss';
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
			color: 'white',
		},
	}),
);

export default function SocialPC(props: any) {
	const classes = useStyles();
	const {socials} = props;

	return (
		<aside className="pDRpR">
			<section className="fNlsam kPSwsK">
				<h3>Social</h3>
				<div className={classes.root}>
					{socials.map((data: any) => (
						<Link display="block" variant="body1" href={data.url} key={data.name} target="_blank" color="inherit">
							<Grid container direction="row" spacing={1} alignItems="center">
								<Grid item>
										<data.icon fontSize="large" />
								</Grid>
							<Grid item>{data.name}</Grid>
							</Grid>
						</Link>
					))}
				</div>
			</section>
		</aside>
	);
}