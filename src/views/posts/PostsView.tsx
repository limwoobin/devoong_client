import React from 'react';
import MarkdownRender from '../MarkdownRender';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const temp = `
# H1 ~
## H2 zz
### H312e313rr
> # 1asdasd
>> ## asdasdasd
* zz \n
\`\`\` 
const a = function() {
    console.log('aaa');
}
\`\`\`

![fetch](https://user-images.githubusercontent.com/28802545/108589005-931bd080-739f-11eb-93d1-e6a72b9549cc.png)
`;

export default function PostsView(props: any) {
	const contents = props.location.state.contents;

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