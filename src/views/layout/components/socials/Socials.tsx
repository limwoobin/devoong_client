import React from 'react';
import { constants , socials } from '@/core/constant';
import { useMediaQuery } from 'react-responsive';
import SocialPC from './SocialPC';
import SocialMobile from './SocialMobile';

export default function SocialContainer() {
	const isPc = useMediaQuery({query: constants.MIN_WIDTH});
	const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

	return (
		<>
			{isPc && <SocialPC socials={socials} />}
			{isMobile && <SocialMobile socials={socials} />}
		</>
	);
}
