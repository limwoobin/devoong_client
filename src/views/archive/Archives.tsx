import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Progress } from '@/views/common';
import { ArchiveGroupModel , ArchiveModel } from '@/models';
import { Link } from 'react-router-dom';
import { TitleView } from '@/views/common';
import ArchiveBox from './ArchivesBox';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '6px 16px',
		color: 'white',
		backgroundColor: 'transparent',
		border: 0,
		outline: 0,
	},
}));

interface IArchives {
	data: ArchiveGroupModel[];
	isLoading: boolean;
}

function renderArchivesGroup(data: ArchiveGroupModel[]) {
	const classes = useStyles();
	if (data !== undefined) {
		return data.map((archive: ArchiveGroupModel , index: number) => (
			<TimelineItem key={index}>
				<TimelineOppositeContent>
					<Paper className={classes.paper} variant="outlined">
						<Typography variant="h6" component="h1" style={{ fontWeight: 'bold' }}>
							{archive.createdYear} ({archive.archives.length})
						</Typography>
					</Paper>
				</TimelineOppositeContent>
				<TimelineSeparator>
					<TimelineDot />
					<TimelineConnector />
				</TimelineSeparator>
				<TimelineContent>
					{renderArchives(archive.archives)}
				</TimelineContent>
			</TimelineItem>
	));
}
}

function renderArchives(data: ArchiveModel[]) {
	if (data !== undefined) {
		return data.map((archive: ArchiveModel , index: number) => (
			<Link key={index} to={`/posts/${archive.id}`} style={{ color: 'white' , textDecoration: 'none' }}>
				<ArchiveBox key={index} title={ `${archive.title} (${archive.createdDate})` } />
			</Link>
		));
	}
}

export default function Archives({data , isLoading}: IArchives) {
	return (
		<Container maxWidth="md">
			<TitleView title="Archives" />
			{!isLoading ? <Progress /> :
				<React.Fragment>
					<Timeline align="left">
						{renderArchivesGroup(data)}
					</Timeline>
				</React.Fragment>	
			}
		</Container>
	);
}

