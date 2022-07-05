import stylesToMakeStyles from './styles';

type Props = {
	currentPage: number;
	itemsPerPag: number;
	dataLength: number;
	isLoading: boolean;
	setCurrentPage: (data: number) => void;
	handlePagination: (data: number) => void;
};

export default function CustomTableFooterPagination({
	currentPage,
	itemsPerPag,
	dataLength,
	isLoading,
	setCurrentPage,
	handlePagination,
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
				<div>skeleton</div>
			) : (
				// <Pagination
				// 	className={classes.pagination}
				// 	count={Math.ceil(dataLength / itemsPerPag)}
				// 	showFirstButton
				// 	showLastButton
				// 	page={currentPage}
				// 	onChange={(event, page) => {
				// 		setCurrentPage(page);
				// 		handlePagination(page);
				// 	}}
				// />
				<Pagination
					className="pagination-bar"
					currentPage={currentPage}
					totalCount={data.length}
					pageSize={PageSize}
					siblingCount={3}
					onPageChange={page => setCurrentPage(page)}
				/>
			)}
		</div>
	);
}
