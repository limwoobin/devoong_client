import { HeaderModel } from '@/models';
import HomeIcon from '@material-ui/icons/Home';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SimCardIcon from '@material-ui/icons/SimCard';
import ArchiveIcon from '@material-ui/icons/Archive';

export const headers: HeaderModel[] = [
	// {path:'' , value:'HOME'},
	// {path:'/about' , value:'ABOUT'},
	// {path:'/tags' , value:'TAGS'},
	// {path:'/archive' , value:'ARCHIVE'}
	{path:'' , value:'HOME' , icon: HomeIcon},
	{path:'/about' , value:'ABOUT' , icon: EmojiEmotionsIcon},
	{path:'/tags' , value:'TAGS' , icon: SimCardIcon},
	{path:'/archive' , value:'ARCHIVE' , icon: ArchiveIcon}
];