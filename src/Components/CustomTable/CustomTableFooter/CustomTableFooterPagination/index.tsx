import Pagination from '../../../CustomPagination';

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
		<div className="grid-cols-6">
			{isLoading ? (
				<div>skeleton</div>
			) : (
				<Pagination
					className="w-full flex justify-center"
					currentPage={currentPage}
					totalCount={dataLength}
					pageSize={itemsPerPag}
					siblingCount={3}
					onPageChange={page => {
						setCurrentPage(page);
						handlePagination(page);
					}}
				/>
			)}
		</div>
	);
}
