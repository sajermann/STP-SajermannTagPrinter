import { List } from 'phosphor-react';
import { useState } from 'react';
import Drawler from '../Drawler';

export default function DrawlerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				data-collapse-toggle="mobile-menu-2"
				type="button"
				className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2"
				aria-expanded="false"
			>
				<List size={32} />
			</button>
			<Drawler side="left" isOpen={isOpen} setIsOpen={e => setIsOpen(e)}>
				<div>Aqui vai ficar o Menu</div>
			</Drawler>
		</>
	);
}
