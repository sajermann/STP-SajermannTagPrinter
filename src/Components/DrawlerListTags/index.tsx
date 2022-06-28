import { useState } from 'react';
import Button from '../Button';
import Drawler from '../Drawler';

export default function DrawlerListTags() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button
				type="button"
				variant="Transparent"
				onClick={() => setIsOpen(true)}
			>
				Listagem
			</Button>
			<Drawler
				side="full"
				isOpen={isOpen}
				setIsOpen={e => setIsOpen(e)}
				title="Listagem"
			>
				<div>Aqui vai ficar o Listagem</div>
			</Drawler>
		</>
	);
}
