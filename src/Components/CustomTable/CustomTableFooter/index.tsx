import CustomTableFooterItemsPerPage from './CustomTableFooterItemsPerPage';
import CustomTableFooterPagination from './CustomTableFooterPagination';

type Props = {
	handleItemsPerPage: (data: any) => void;
	itemsPerPag: number;
	dataLength: number;
	currentPage: number;
	isLoading: boolean;
	setCurrentPage: (data: number) => void;
	handlePagination: (data: number) => void;
};

export default function CustomTableFooter({
	handleItemsPerPage,
	currentPage,
	itemsPerPag,
	dataLength,
	isLoading,
	setCurrentPage,
	handlePagination,
}: Props) {
	return (
		<div className="grid">
			<div className=" grid grid-cols-12 w-full border border-b-white my-4" />
			<div className="grid grid-cols-2 flex-row items-center justify-items-center">
				<CustomTableFooterItemsPerPage
					isLoading={isLoading}
					dataLength={dataLength}
					handleItemsPerPage={handleItemsPerPage}
					itemsPerPag={itemsPerPag}
				/>

				<CustomTableFooterPagination
					isLoading={isLoading}
					currentPage={currentPage}
					dataLength={dataLength}
					handlePagination={handlePagination}
					itemsPerPag={itemsPerPag}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
}
