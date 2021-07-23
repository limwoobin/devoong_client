import React from 'react';
import MarkdownRender from '../MarkdownRender';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const contents = `
# H1 ~
## H2 zz
### H312e313rr
> # 1asdasd
>> ## asdasdasd
* zz
\`\`\` 
const a = function() {
    console.log('aaa');
}
\`\`\`
![fetch](https://user-images.githubusercontent.com/28802545/108589005-931bd080-739f-11eb-93d1-e6a72b9549cc.png)
`;

export default function PostsView() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<Typography component="div" style={{ height: '100vh' }}>
					<MarkdownRender contents={contents} />
				</Typography>
			</Container>
		</React.Fragment>
	);
}