import React from 'react';
import Socials from './layout/components/socials/Socials';
import { useMediaQuery } from 'react-responsive';
import { constants } from '@/core/constant';
import Router from './Router';
import { TagsLayoutContainer , LatestPostsContainer } from '@/container';
import './main.scss';

export default function Main() {
const isPc = useMediaQuery({query: constants.MIN_WIDTH});
	return (
		<>
			<div className="lpgbkm">
				<div className="BAccj">
					<Router />
				</div>
				{isPc 
					? <div>
							<TagsLayoutContainer />
							<LatestPostsContainer />
							<Socials />
						</div>
					: '' 
				}
			</div>;
		</>
	);
}
