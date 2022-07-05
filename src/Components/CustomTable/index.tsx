import { ChangeEvent, ComponentType, useEffect, useState } from 'react';
import CustomTableFooter from './CustomTableFooter';
import CustomTableHeader from './CustomTableHeader';
import CustomTableBody from './CustomTableBody';

type Props = {
	data: object[];
	columns: object[];
	handleClickAdd?: () => void;
	customElementHeader?: ComponentType;
	isLoading: boolean;
	itemsPerPage?: number;
};
export default function CustomTable({
	data,
	handleClickAdd,
	columns,
	isLoading,
	itemsPerPage,
	customElementHeader,
}: Props) {
	const [dataComplete, setDataComplete] = useState<object[]>([]);
	const [dataScreen, setDataScreen] = useState<object[]>([]);
	const [dataFiltred, setDataFiltred] = useState<object[]>([]);
	const [itemsPerPag, setItemsPerPag] = useState(5);
	const [currentPage, setCurrentPage] = useState(1);

	function handleShowData(permissionsParams: object[], itensPerPage: number) {
		const t: object[] = [];
		for (let i = 0; i < itensPerPage; i += 1) {
			if (permissionsParams.length === i) break;
			t.push(permissionsParams[i]);
		}
		setDataScreen(t);
	}

	function handleFilterData(e: ChangeEvent<HTMLInputElement>) {
		const valueSearch = e.target.value.toLowerCase();
		const dataForFilter = [...(dataComplete || [])];
		const resultFiltred = dataForFilter.filter((item: any) => {
			const props = Object.getOwnPropertyNames(item);
			let complete = '';
			for (const prop of props) {
				complete += `${item[prop] || ''}`;
			}
			return complete.toLowerCase().indexOf(valueSearch) > -1;
		});
		if (resultFiltred) {
			setDataFiltred(resultFiltred);
			handleShowData(resultFiltred, itemsPerPag);
		}
		setCurrentPage(1);
	}

	function handleItemsPerPage(itemPerPag: number) {
		const dataNow = [...dataFiltred];
		setItemsPerPag(itemPerPag);
		setCurrentPage(1);
		handleShowData(dataNow, itemPerPag);
	}

	function handlePagination(page: number) {
		const end = page * itemsPerPag;
		const begin = end - itemsPerPag;
		const t: object[] = [];
		for (let i = begin; i < end; i += 1) {
			if (dataFiltred) {
				if (dataFiltred.length === i) break;
				t.push(dataFiltred[i]);
			}
		}
		setDataScreen(t);
	}

	useEffect(() => {
		setDataComplete(data);
		setDataFiltred(data);
		handleShowData(data, itemsPerPag);
	}, [data]);

	useEffect(() => {
		if (itemsPerPage) setItemsPerPag(itemsPerPage);
	}, []);

	return (
		<>
			<CustomTableHeader
				isLoading={isLoading}
				dataFilteredLength={dataFiltred.length}
				dataLength={dataComplete.length}
				handleSearch={handleFilterData}
				handleClickAdd={handleClickAdd}
				customElementHeader={customElementHeader}
			/>
			<CustomTableBody
				isLoading={isLoading}
				data={dataScreen}
				columns={columns}
				itemsPerPage={itemsPerPag}
			/>
			<CustomTableFooter
				isLoading={isLoading}
				dataLength={dataFiltred.length}
				handleItemsPerPage={handleItemsPerPage}
				itemsPerPag={itemsPerPag}
				currentPage={currentPage}
				handlePagination={handlePagination}
				setCurrentPage={setCurrentPage}
			/>
		</>
	);
}
