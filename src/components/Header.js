import React from 'react';
import Logo from '../logo.png';

const Header = () => {
	return (
		<div className='w-full h-48 pt-24 flex items-center justify-center'>
			<img src={Logo} className='object-fill w-96 h-32'></img>
		</div>
	);
};

export default Header;
