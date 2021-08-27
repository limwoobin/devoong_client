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
import Progress from '../common/Progress';
import { ArchiveGroupModel , ArchiveModel } from '../../models';
import { Link } from 'react-router-dom';
import Material_Link from '@material-ui/core/Link';
import ArchiveBox from './ArchivesBox';
import './archive.scss';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: '6px 16px',
		// backgroundColor: '#22b3eb',
		backgroundColor: '#6799FF',
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
			<>
				<TimelineItem>
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
			</>
		));
	}
}

function renderArchives(data: ArchiveModel[]) {
	if (data !== undefined) {
		return data.map((archive: ArchiveModel , index: number) => (
			<Link to={`/posts/${archive.id}`} className="archive_label">
				<Material_Link key={index} style={{ color: 'white' }}>
					<ArchiveBox title={ `${archive.title} (${archive.createdDate})` } />
				</Material_Link>
			</Link>
		));
	}
}

export default function Archives({data , isLoading}: IArchives) {
	return (
		<>
			{!isLoading ? <Progress /> :
				<React.Fragment>
					<Timeline align="left">
						{renderArchivesGroup(data)}
					</Timeline>
				</React.Fragment>	
			}
		</>
	);
}

