import React from 'react';
import './main.scss';
import LatestPostsContainer from './layout/components/recents/LatestPostsContainer';
import Socials from './layout/components/socials/Socials';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../core/constant';
import Router from './Router';
import { TagsContainer } from '../container';

export default function MainView() {
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
	return <div>
					<div className="lpgbkm">
						<div className="BAccj">
							<Router />
						</div>
						<div className="sideBar">
							<TagsContainer />
							<LatestPostsContainer />
							<Socials />
						</div>
					</div>
				</div>;
};

const MobileMainView = () => {
	return <div>
					<TagsContainer />
					<LatestPostsContainer />
					<Router />
				 </div>;
};
