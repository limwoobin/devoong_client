import React from 'react';
import { Progress , TitleView } from '@/views/common';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { PostsModel, TagsModel, PostsCard, ErrorModel } from '@/models';
import { DateUtils } from '@/core/utils';
import { DateType } from '@/core/enums';
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
	errorData: ErrorModel;
}

export default function PostsView({data , isLoading , errorData}: IPostsView) {
	const tags: TagsModel[] = data.tagsResponseList;

	return (
		<>
			{!isLoading ? <Progress /> : 
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth="md">
						<RenderTags tags={tags} />
						<Typography component="div" style={{ height: '100vh' }}>
							<TitleView title={data.title!} />
							<h4 style={{ color: 'white' }}>
								{DateUtils.convertDate(DateType.YEAR_MONTH_DATE , data.createdDate)}
							</h4>
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