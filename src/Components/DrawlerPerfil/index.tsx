import { UserSquare } from 'phosphor-react';
import { useState } from 'react';
import ButtonIconHeader from '../ButtonIconHeader';
import Drawler from '../Drawler';

export default function DrawlerPerfil() {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<ButtonIconHeader
				onClick={() => setIsOpen(true)}
				data-collapse-toggle="mobile-menu-2"
				aria-controls="mobile-menu-2"
				aria-expanded="false"
				type="button"
			>
				<UserSquare size={32} />
			</ButtonIconHeader>
			<Drawler side="right" isOpen={isOpen} setIsOpen={e => setIsOpen(e)}>
				<div>Aqui pode ficar informações de Perfil</div>
			</Drawler>
		</>
	);
}
