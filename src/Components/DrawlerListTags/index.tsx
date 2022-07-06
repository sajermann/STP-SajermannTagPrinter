import { useEffect, useState } from 'react';
import Button from '../Button';
import Drawler from '../Drawler';
import tagPrinterServices from '../../Services/TagPrinter';
import TagType from '../../Types/TagType';
import CustomTable from '../CustomTable';
import { FormatDateAndHour } from '../../Utils/StringVsDate';
import delay from '../../Utils/Delay';

type Props = {
	tagsAddeds: TagType[];
	setTagsAddeds: (data: TagType[]) => void;
};

export default function DrawlerListTags({ tagsAddeds, setTagsAddeds }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const [data, setData] = useState<TagType[]>([]);
	const [selectedRows, setSelectedRows] = useState<TagType[]>([]);

	async function handleSave() {
		setIsLoading(true);
		setTagsAddeds([...tagsAddeds, ...selectedRows]);
		setIsLoading(false);
		setSuccess(true);
		await delay(1001);
		setSelectedRows([]);
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

	useEffect(() => console.log(selectedRows), [selectedRows]);

	function handleAddItem(id: string) {
		console.log('Add', id);
		const itemsForAdd = [...selectedRows];
		const itemForAdd = data.find(b => b.id === id);
		if (!itemForAdd) {
			return;
		}
		itemsForAdd.push(itemForAdd);
		setSelectedRows(itemsForAdd);
	}

	function handleRemoveItem(id: string) {
		setSelectedRows(selectedRows.filter(b => b.id !== id));
	}

	function handleSelect(event: React.MouseEvent<HTMLInputElement, MouseEvent>) {
		const { checked, dataset } = event.target as HTMLInputElement;
		if (checked && dataset.id) {
			handleAddItem(dataset.id);
			return;
		}
		if (dataset.id) {
			handleRemoveItem(dataset.id);
		}
	}

	const columns = [
		{
			field: 'id',
			header: 'Selecionar',
			render: (id: string) => (
				<div className="flex items-center justify-center">
					<input
						defaultChecked={!!selectedRows.find(b => b.id === id)}
						type="checkbox"
						className="accent-pink-500 h-6 w-6"
						data-id={id}
						onClick={handleSelect}
					/>
				</div>
			),
			options: {
				width: 50,
			},
		},
		{
			field: 'product',
			header: 'Produto',
			render: null,
			options: {
				width: 150,
			},
		},
		{
			field: 'quantity',
			header: 'Quantidade',
			render: null,
			options: {
				width: 150,
			},
		},

		{
			field: 'date',
			header: 'Cadastrado',
			render: (createdAt: string) => (
				<div>{FormatDateAndHour(new Date(createdAt))}</div>
			),

			options: {
				width: 120,
			},
		},
	];

	return (
		<>
			<Button type="button" variant="Primary" onClick={() => setIsOpen(true)}>
				Listagem
			</Button>
			<Drawler
				disabledSaveButton={selectedRows.length === 0}
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
				<CustomTable isLoading={isLoading} data={data} columns={columns} />
			</Drawler>
		</>
	);
}
