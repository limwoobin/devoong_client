import { SocialModel } from "@/models";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export const socials: SocialModel[] = [
	{name: 'GitHub' , url: 'https://github.com/limwoobin' , icon: GitHubIcon},
	{name: 'LinkedIn', url: 'https://www.linkedin.com/authwall?trk=gf&trkInfo=AQEOrQrH28GRygAAAXjeZQJoaRPT-4B6kF2KsodTXpWzXtHBaRLFsAJvpGIUebtN1LSo4yfbmrItSKpKJuXM38fAyVP9PTs6-hRRFju-VDamLDs22q9PRndTDAR4SZV3hT27QhM=&originalReferer=&sessionRedirect=https%3A%2F%2Fkr.linkedin.com%2Fin%2F%25EC%259A%25B0%25EB%25B9%2588-%25EC%259E%2584-954a01193%2F' , icon: LinkedInIcon}
];