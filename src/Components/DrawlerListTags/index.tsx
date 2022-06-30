import { useState } from 'react';
import DataGrid from 'react-data-grid';
import delay from '../../Utils/Delay';
import Button from '../Button';
import Drawler from '../Drawler';

const columns = [
	{ key: 'id', name: 'ID' },
	{ key: 'title', name: 'Title' },
];

const rows = [
	{ id: 0, title: 'Example' },
	{ id: 1, title: 'Demo' },
];

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
				<DataGrid className="bg-blue-500" columns={columns} rows={rows} />
			</Drawler>
		</>
	);
}
