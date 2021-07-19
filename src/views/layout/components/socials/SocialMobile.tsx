import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

export default function SocialMobile(props: any) {
	const {socials} = props;

	return (
		<>
			{socials.map((data: any) => (
				<Link display="block" variant="body1" href={data.url} key={data} target="_blank">
					<Grid container direction="row" spacing={1} alignItems="center">
						<Grid item>
								<data.icon />
						</Grid>
					<Grid item>{data.name}</Grid>
					</Grid>
				</Link>
			))}
		</>
	);
}