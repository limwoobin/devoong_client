import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Link from '@material-ui/core/Link';


export default function FooterMobile() {
    return (
        <BottomNavigation style={{backgroundColor: '#424242'}}>
            <Link display="block" variant="body1" href="https://github.com/limwoobin" target="_blank">
                <BottomNavigationAction label="Nearby" icon={<GitHubIcon />} />
            </Link>
            <Link display="block" variant="body1" href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEOrQrH28GRygAAAXjeZQJoaRPT-4B6kF2KsodTXpWzXtHBaRLFsAJvpGIUebtN1LSo4yfbmrItSKpKJuXM38fAyVP9PTs6-hRRFju-VDamLDs22q9PRndTDAR4SZV3hT27QhM=&originalReferer=&sessionRedirect=https%3A%2F%2Fkr.linkedin.com%2Fin%2F%25EC%259A%25B0%25EB%25B9%2588-%25EC%259E%2584-954a01193%2F" target="_blank">
                <BottomNavigationAction label="Nearby" icon={<LinkedInIcon />} />
            </Link>
        </BottomNavigation>
    );
}