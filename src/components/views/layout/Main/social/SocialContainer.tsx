import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH } from '../../../../../core/constant/constants';
import { useMediaQuery } from 'react-responsive';
import SocialPC from './SocialPC';
import SocialMobile from './SocialMobile';

const socials = [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/limwoobin' },
    { name: 'LinkedIn', icon: LinkedInIcon, url: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEOrQrH28GRygAAAXjeZQJoaRPT-4B6kF2KsodTXpWzXtHBaRLFsAJvpGIUebtN1LSo4yfbmrItSKpKJuXM38fAyVP9PTs6-hRRFju-VDamLDs22q9PRndTDAR4SZV3hT27QhM=&originalReferer=&sessionRedirect=https%3A%2F%2Fkr.linkedin.com%2Fin%2F%25EC%259A%25B0%25EB%25B9%2588-%25EC%259E%2584-954a01193%2F' },
];

export default function SocialContainer() {
	const isPc = useMediaQuery({query: MOBILE_MIN_WIDTH});
    const isMobile = useMediaQuery({query: MOBILE_MAX_WIDTH});

    return (
        <>
          {isPc && <SocialPC socials={socials} />}
		  {isMobile && <SocialMobile socials={socials} />}
        </>
    )
}
