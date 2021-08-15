import React from 'react';
import Progress from '../common/Progress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { PostsModel, TagsModel, PostsCard } from '../../models';
import TitleView from '../common/TitleView';
import Utterances from './Utterances';
import PostsBox from './PostsBox';
import { Direction } from '../../core/enums';
import { MarkdownContainer } from '../../container';
import { RenderTags } from '../tags';
import './posts.scss';

interface IPostsView {
	data: PostsModel | any;
	isLoading: boolean;
}

function Blank() {
	return <div style={{paddingTop: '20px' , paddingBottom: '20px'}} />;
}

function renderPreviousAndNextPosts(previousData: PostsCard , nextData: PostsCard) {
	return (
		<div>
			{previousData ?
				<PostsBox 
					id={previousData.id}
					title={previousData.title}
					state={Direction.PREVIOUS}
				/>	:
				<PostsBox emptyMessage="이전글이 없습니다." />
			}
			{nextData ?
				<PostsBox 
					id={nextData.id}
					title={nextData.title}
					state={Direction.NEXT}
				/>	:
				<PostsBox emptyMessage="다음글이 없습니다." />
			}
		</div>
	);
}

export default function PostsView(props: IPostsView) {
	const { data , isLoading } = props;
	const tags: TagsModel[] = data.tagsResponseList!;

	return (
		<>
			{!isLoading ? <Progress /> : 
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth="md">
						<RenderTags tags={tags} />
						<Typography component="div" style={{ height: '100vh' }}>
							<TitleView title={data.title!} />
							<MarkdownContainer uri={data.contents!} />
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