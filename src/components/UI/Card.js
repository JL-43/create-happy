import React from 'react';

const Card = (props) => {
	const highlight = `h-1 bg-${props.color}-300 flex w-full`;
	return (
		<div className='rounded overflow-hidden shadow-lg flex flex-col h-72 mb-10 text-left border-b-2 border-r-2 border-l-2'>
			<div className={highlight}></div>
			<div className='flex justify-around'>
				<div className='flex-auto px-4 py-4'>
					<p>{props.title}</p>
					<p>{props.description}</p>
					<p>{props.date}</p>
				</div>
				<img
					src={props.img}
					className='object-cover h-52 w-52 m-5'
				></img>
			</div>
		</div>
	);
};

export default Card;
