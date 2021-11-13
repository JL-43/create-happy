import React from 'react';

const Card = (props) => {
	const parentClass = `rounded overflow-hidden shadow-lg flex flex-col h-72 mb-10 text-left border-t-4 border-1 border-${props.color}-400`;
	return (
		<div className={parentClass}>
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
