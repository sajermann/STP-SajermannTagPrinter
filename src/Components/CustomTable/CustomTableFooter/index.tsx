import CustomTableFooterItemsPerPage from './CustomTableFooterItemsPerPage';
import CustomTableFooterPagination from './CustomTableFooterPagination';
import stylesForMakeStyles from './styles';

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
		<div
			className="grid-cols-12"
			// className={classes.gridItemFooter}
			// item
			// xs={12}
			// sm={12}
			// md={12}
			// lg={12}
			// xl={12}
		>
			<div
			// container spacing={1}
			>
				<div className="w-full border border-b-white my-4" />
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
