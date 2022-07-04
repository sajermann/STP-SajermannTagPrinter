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
		<div
			className="grid-cols-6"
			// className={classes.gridDetails}
			// item
			// xs={12}
			// sm={6}
			// md={6}
			// lg={6}
			// xl={6}
		>
			{isLoading ? (
				<div>Skeleton</div>
			) : (
				<div>Select boladão das paginas</div>
				// <FormControl sx={{ m: 1, minWidth: 200 }}>
				// 	<InputLabel id="itensPerpage">Itens por página</InputLabel>
				// 	<Select
				// 		labelId="itensPerpage"
				// 		id="selectItensPerPage"
				// 		value={itemsPerPag.toString()}
				// 		label="Itens por página"
				// 		onChange={handleItemsPerPage}
				// 	>
				// 		<MenuItem value={5}>5</MenuItem>
				// 		<MenuItem value={10}>10</MenuItem>
				// 		<MenuItem value={15}>15</MenuItem>
				// 		<MenuItem value={20}>20</MenuItem>
				// 		<MenuItem value={30}>30</MenuItem>
				// 		<MenuItem value={dataLength}>Todos</MenuItem>
				// 	</Select>
				// </FormControl>
			)}
		</div>
	);
}
