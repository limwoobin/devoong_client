import React from 'react';
import { Progress , TitleView } from '@/views/common';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { PostsModel, TagsModel, PostsCard } from '@/models';
import Utterances from './Utterances';
import PostsBox from './PostsBox';
import { Direction } from '@/core/enums';
import { MarkdownRender } from '@/views/common';
import { RenderTags } from '@/views/tags';
import './posts.scss';

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

interface IPostsView {
	data: PostsModel | any;
	isLoading: boolean;
}

export default function PostsView({data , isLoading}: IPostsView) {
	const tags: TagsModel[] = data.tagsResponseList;

	return (
		<>
			{!isLoading ? <Progress /> : 
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth="md">
						<RenderTags tags={tags} />
						<Typography component="div" style={{ height: '100vh' , paddingTop: '3rem' }}>
							<TitleView title={data.title!} />
							<MarkdownRender data={data.contents!} isLoading={true} />
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