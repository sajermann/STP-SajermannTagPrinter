/* eslint-disable @typescript-eslint/no-use-before-define */
import { useEffect, useState } from 'react';
import delay from '../../Utils/Delay';
import Button from '../Button';
import Drawler from '../Drawler';
import tagPrinterServices from '../../Services/TagPrinter';
import TagType from '../../Types/TagType';
import CustomTable from '../CustomTable';
import { FormatDateAndHour } from '../../Utils/StringVsDate';

export default function DrawlerListTags() {
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [failed, setFailed] = useState(false);
	const [openAdd, setOpenAdd] = useState(false);
	const [data, setData] = useState<TagType[]>([]);
	const [selectedRows, setSelectedRows] = useState<TagType[]>([]	);

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

	useEffect(() => console.log(selectedRows), [selectedRows]);

	function handleSelect(e: React.MouseEvent<HTMLInputElement, MouseEvent>){
console.log(e)
	}

	const columns = [
		{
			field: 'id',
			header: 'Selecionar',
			render: (id: string) => (
				<input type="checkbox" className='accent-pink-500 h-6 w-6' data-id={id} onClick={handleSelect} />
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
				<CustomTable
					isLoading={isLoading}
					data={data}
					handleClickAdd={() => setOpenAdd(true)}
					columns={columns}
				/>
			</Drawler>
		</>
	);
}
