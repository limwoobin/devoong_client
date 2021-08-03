import React from 'react';
import MarkdownRender from '../common/MarkdownRender';
import Progress from '../common/Progress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { PostsModel, TagsModel, PostsCard } from '../../models';
import { Tag } from 'antd';
import TitleView from '../common/TitleView';
import Utterances from './Utterances';
import { Link } from 'react-router-dom';
import './posts.scss';

function renderTags(tagsList: TagsModel[]) {
	if (tagsList) {
		return (
			tagsList.map((tag: TagsModel , index: number) => (
				<Tag key={index} color="#757575" style={{fontSize: '15px' , fontWeight: 'bold'}}>
					{tag.name}
				</Tag>
			))
		);
	}
}

interface PostsViewProps {
	data: PostsModel;
	isLoading: false;
}

function Blank() {
	return <div style={{paddingTop: '20px' , paddingBottom: '20px'}} />;
}

function renderPreviousAndNextPosts(previousData: PostsCard , nextData: PostsCard) {
	return (
		<div>
			{previousData ?
				<Link key={previousData.id} to={{ pathname: `/posts/${previousData.id}` , state: {id: previousData.id}}}>
					<div className="blockArea">
						<label>previous - {previousData.title}</label>
					</div>
				</Link>
				:
				<div className="blockArea">
						이전글이 없습니다.
				</div>
			}
			{nextData ?
				<Link key={nextData.id} to={{ pathname: `/posts/${nextData.id}` , state: {id: nextData.id} }}>
					<div className="blockArea">
						<label>next - {nextData.title}</label>
					</div>
				</Link>
				:
				<div className="blockArea">
					다음글이 없습니다.
				</div>
			}
		</div>
	);
}

export default function PostsView(props: PostsViewProps) {
	const { data , isLoading } = props;

	return (
		<>
			{!isLoading ? <Progress /> : 
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth="md">
						{renderTags(data.tagsResponseList!)}
						<Typography component="div" style={{ height: '100vh' }}>
							<TitleView title={data.title!} />
							<MarkdownRender contents={data.contents} />
							<Blank />
							{renderPreviousAndNextPosts(data.previousPostsCard! , data.nextPostsCard!)}
							<Utterances />
						</Typography>
					</Container>
				</React.Fragment>
			}
		</>
	);
}