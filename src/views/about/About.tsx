import React from 'react';
import './about.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MarkdownRender from '../common/MarkdownRender';

const data = `
> # 임우빈 (woobeen lim)
3년차 백엔드 개발자입니다.  
백엔드 , 네트워크 , 인프라에 관심이 있습니다.

> # Tech
* Java
* Spring
* Jpa
* mysql
* redis
* docker

> # Career
  
### 2021.03 ~ now   __MarketKurly__ - Backend Developer


### 2019.10 ~ 2020.11 TeamWink (알다) - Backend Developer


### 2018.04 ~ 2019.05 CmeSoft - Backend Developer

`;

export default function About() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<Typography component="div" style={{ backgroundColor: '#363636' , height: '100vh' }}>
						<MarkdownRender data={data} isLoading={true} />
				</Typography>
			</Container>
		</React.Fragment>
	);
}