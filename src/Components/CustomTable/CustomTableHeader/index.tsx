import { ChangeEvent, ComponentType } from 'react';
import CustomTableHeaderSearch from './CustomTableHeaderSearch';
import CustomTableHeaderInfoRegisters from './CustomTableHeaderInfoRegisters';
import CustomTableHeaderButtonAdd from './CustomTableHeaderButtonAdd';
import CustomTableHeaderCustomButtons from './CustomTableHeaderCustomButtons';

type Props = {
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	dataLength: number;
	dataFilteredLength: number;
	isLoading: boolean;
	handleClickAdd?: () => void;
	customElementHeader?: ComponentType;
};

export default function CustomTableHeader({
	handleSearch,
	dataLength,
	dataFilteredLength,
	isLoading,
	handleClickAdd,
	customElementHeader,
}: Props) {
	return (
		<div className=" bg-slate-400">
			<div className="grid grid-cols-3 ">
				<CustomTableHeaderSearch
					isLoading={isLoading}
					handleSearch={handleSearch}
				/>
				<CustomTableHeaderInfoRegisters
					isLoading={isLoading}
					dataFilteredLength={dataFilteredLength}
					dataLength={dataLength}
				/>
				{handleClickAdd && (
					<CustomTableHeaderButtonAdd
						isLoading={isLoading}
						handleClickAdd={handleClickAdd}
					/>
				)}

				{customElementHeader && (
					<CustomTableHeaderCustomButtons
						isLoading={isLoading}
						customElementHeader={customElementHeader}
					/>
				)}
			</div>
			<div className="w-full border border-b-white my-4" />
		</div>
	);
}
