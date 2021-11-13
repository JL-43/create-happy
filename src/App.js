import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Card from './components/UI/Card';
import Sidebar from './components/Sidebar';

import Ramen from './assets/ramen.jpeg';
import Lugaw from './assets/lugaw.jpeg';
import Chandelier from './assets/chandelier.jpg';

function App() {
	const entries = [
		{
			id: 1,
			title: 'first date!',
			description: 'ramen kuroda lang naman pero masarap pa din',
			date: 'gusto ko na makipag kita',
			img: Ramen,
			color: 'blue',
		},
		{
			id: 2,
			title: 'Lugawan sa Tejeros',
			description: 'uy sarap naman ng goto',
			date: 'when when when',
			img: Lugaw,
			color: 'green',
		},
		{
			id: 3,
			title: 'Chandelier Hunting',
			description: 'ate smart chandelier ba yan',
			date: 'kapag may pera na',
			img: Chandelier,
			color: 'red',
		},
	];
	return (
		<div className='App'>
			<Header />
			<Body>
				<div className='flex-auto col-span-8 pr-16'>
					{entries.map((entries) => (
						<Card
							id={entries.id}
							title={entries.title}
							description={entries.description}
							date={entries.date}
							img={entries.img}
							color={entries.color}
						/>
					))}
				</div>
				<Sidebar />
			</Body>
		</div>
	);
}

export default App;
