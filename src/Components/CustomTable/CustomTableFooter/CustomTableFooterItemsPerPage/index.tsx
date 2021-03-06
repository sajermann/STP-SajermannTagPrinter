type Props = {
	handleItemsPerPage: (data: any) => void;
	itemsPerPag: number;
	dataLength: number;
	isLoading: boolean;
};

export default function CustomTableFooterItemsPerPage({
	handleItemsPerPage,
	itemsPerPag,
	dataLength,
	isLoading,
}: Props) {
	return (
		<div className="flex gap-4 items-center justify-center">
			{isLoading ? (
				<div>Skeleton</div>
			) : (
				<>
					<div>Itens por página</div>
					<select
						className="form-select appearance-none block px-3 py-1.5 text-base font-normal
						text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid
						border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700
						focus:bg-white focus:border-blue-600 focus:outline-none w-52"
						aria-label="Disabled select example"
						onChange={e => handleItemsPerPage(Number(e.target.value))}
						id="selectItensPerPage"
						defaultValue={itemsPerPag}
					>
						<option value={5}>5</option>
						<option value={10}>10</option>
						<option value={15}>15</option>
						<option value={20}>20</option>
						<option value={30}>30</option>
						<option value={dataLength}>Todos</option>
					</select>
				</>
			)}
		</div>
	);
}
