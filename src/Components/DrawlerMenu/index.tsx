import { List } from 'phosphor-react';
import { useState } from 'react';
import ButtonIconHeader from '../ButtonIconHeader';
import Drawler from '../Drawler';

export default function DrawlerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<ButtonIconHeader
				onClick={() => setIsOpen(true)}
				data-collapse-toggle="mobile-menu-2"
				type="button"
				aria-controls="mobile-menu-2"
				aria-expanded="false"
			>
				<List size={32} />
			</ButtonIconHeader>

			<Drawler side="left" isOpen={isOpen} setIsOpen={e => setIsOpen(e)}>
				<div>Aqui vai ficar o Menu</div>
			</Drawler>
		</>
	);
}
