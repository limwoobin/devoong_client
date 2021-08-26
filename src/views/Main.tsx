import React from 'react';
import Socials from './layout/components/socials/Socials';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../core/constant';
import Router from './Router';
import { TagsLayoutContainer , LatestPostsContainer } from '../container';
import './main.scss';

export default function Main() {
const isPc = useMediaQuery({query: constants.MIN_WIDTH});
const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

	return (
		<>
				{isPc && <PcMainView />}
				{isMobile && <MobileMainView />}
		</>
	);
}

const PcMainView = () => {
	return <div className="lpgbkm">
						<div className="BAccj">
							<Router />
						</div>
						<div>
							<TagsLayoutContainer />
							<LatestPostsContainer />
							<Socials />
						</div>
					</div>;
};

const MobileMainView = () => {
	return <div>
					{/* <TagsLayoutContainer /> */}
					<LatestPostsContainer />
					<Router />
				 </div>;
};
