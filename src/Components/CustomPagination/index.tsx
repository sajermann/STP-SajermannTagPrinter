import { usePagination, DOTS } from './usePagination';
import './pagination.scss';

type Props = {
	onPageChange: (data: number) => void;
	totalCount: number;
	siblingCount: number;
	currentPage: number;
	pageSize: number;
	className: string;
};

function Pagination({
	onPageChange,
	totalCount,
	siblingCount = 1,
	currentPage,
	pageSize,
	className,
}: Props) {
	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (!paginationRange || currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	const lastPage = paginationRange[paginationRange.length - 1];
	return (
		<ul className="pagination-container">
			<li
				className={`pagination-item ${currentPage === 1 && 'disabled'}`}
				onClick={onPrevious}
				onKeyPress={onPrevious}
				role="presentation"
			>
				<div className="arrow left" />
			</li>
			{paginationRange.map(pageNumber => {
				if (pageNumber === DOTS) {
					return <li className="pagination-item dots">&#8230;</li>;
				}

				return (
					<li
						className={`pagination-item ${
							pageNumber === currentPage && 'selected'
						}`}
						onClick={() => onPageChange(Number(pageNumber))}
						onKeyPress={() => onPageChange(Number(pageNumber))}
						role="presentation"
					>
						{pageNumber}
					</li>
				);
			})}
			<li
				className={classnames('pagination-item', {
					disabled: currentPage === lastPage,
				})}
				onClick={onNext}
			>
				<div className="arrow right" />
			</li>
		</ul>
	);
}

export default Pagination;
