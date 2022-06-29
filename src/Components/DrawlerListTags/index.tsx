import { useState } from 'react';
import delay from '../../Utils/Delay';
import Button from '../Button';
import Drawler from '../Drawler';

export default function DrawlerListTags() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);

	async function handleSave() {
		setIsLoading(true);

		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
	}
	return (
		<>
			<Button type="button" variant="Primary" onClick={() => setIsOpen(true)}>
				Listagem
			</Button>
			<Drawler
				side="full"
				isOpen={isOpen}
				setIsOpen={e => setIsOpen(e)}
				title="Listagem"
				isLoading={isLoading}
				onSave={handleSave}
				inSuccess={{
					success,
					setSuccess,
					setIsOpen,
				}}
				inFailed={{
					failed,
					setFailed,
				}}
			>
				<div>Aqui vai ficar o Listagem</div>
			</Drawler>
		</>
	);
}
