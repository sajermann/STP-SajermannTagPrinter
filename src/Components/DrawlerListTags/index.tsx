import { useEffect, useState } from 'react';
import DataGrid from 'react-data-grid';
import delay from '../../Utils/Delay';
import Button from '../Button';
import Drawler from '../Drawler';
import tagPrinterServices from '../../Services/TagPrinter';
import TagType from '../../Types/TagType';

const columns = [
	{ key: 'product', name: 'Produto', editable: true, sortable: true },
	{ key: 'quantity', name: 'Quantidade' },
	{ key: 'date', name: 'Data' },
	{
		key: 'username',
		name: 'Usuário',
		editable: true,
		sortable: true,
	},
];

export default function DrawlerListTags() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const [data, setData] = useState<TagType[]>([]);

	async function handleSave() {
		setIsLoading(true);

		await delay(3000);
		setIsLoading(false);
		setSuccess(true);
	}

	async function load() {
		setIsLoading(true);
		const result = await tagPrinterServices.getAllTagPrinter();
		setData(result);
		setIsLoading(false);
	}

	useEffect(() => {
		load();
	}, [isOpen]);

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
				<DataGrid
					className=" h-full"
					columns={columns}
					rows={data}
					cellNavigationMode="CHANGE_ROW"
				/>
			</Drawler>
		</>
	);
}
