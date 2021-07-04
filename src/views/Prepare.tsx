import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch : React.FC = () => {
  return (
    <div>
      <div className="iRWwWQ">
        {/* <img src="https://www.gaia-wind.com/images/404.png" style={{ marginTop: '10%' }} /> */}
        <img src="../../public/preparing.png" style={{ marginTop: '10%' }} />
        <Link to="/" style={{ textDecoration: 'none' }}>
            <button color="teal" className="homeBtn">준비중...</button>
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;