import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch : React.FC = () => {
	return (
		<div>
			<div className="iRWwWQ">
				<img src="../../public/404.png" style={{ marginTop: '10%' }} />
				<Link to="/" style={{ textDecoration: 'none' }}>
					<button color="teal" className="homeBtn">홈으로</button>
				</Link>
			</div>
		</div>
	);
};

export default NoMatch;