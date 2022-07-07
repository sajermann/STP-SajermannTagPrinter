import { generateGuid } from '../../Utils/Random';
import { usePagination, DOTS } from './usePagination';
// import './pagination.scss';

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
		<ul className={`flex list-none ${className}`}>
			<li
				className={`px-3 h-8 text-center my-auto mx-1 flex border-box box-border items-center rounded-2xl leading-normal text-sm min-w-[32px] hover:cursor-pointer hover:bg-slate-400 transition-colors se ${
					currentPage === 1 && 'pointer-events-none opacity-30'
				}`}
				onClick={onPrevious}
				onKeyPress={onPrevious}
				role="presentation"
			>
				<div className="relative content-[''] inline-block w-2 h-2 border-r-[0.12em] border-t-[0.12em] rotate-[-135deg] translate-[-50%]" />
			</li>
			{paginationRange.map(pageNumber => {
				if (pageNumber === DOTS) {
					return (
						<li
							key={generateGuid()}
							className="px-3 h-8 text-center my-auto mx-1 flex border-box box-border items-center rounded-2xl leading-normal text-sm min-w-[32px] hover:cursor-pointer hover:bg-slate-400 transition-colors se dots"
						>
							&#8230;
						</li>
					);
				}

				return (
					<li
						key={pageNumber}
						className={`px-3 h-8 text-center my-auto mx-1 flex border-box box-border items-center rounded-2xl leading-normal text-sm min-w-[32px] hover:cursor-pointer hover:bg-slate-400 transition-colors se ${
							pageNumber === currentPage && 'bg-slate-600 text-white'
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
				className={`px-3 h-8 text-center my-auto mx-1 flex border-box box-border items-center rounded-2xl leading-normal text-sm min-w-[32px] hover:cursor-pointer hover:bg-slate-400 transition-colors se ${
					currentPage === lastPage && 'pointer-events-none opacity-30'
				}`}
				onClick={onNext}
				onKeyPress={onNext}
				role="presentation"
			>
				<div className="relative content-[''] inline-block w-2 h-2 border-r-[0.12em] border-t-[0.12em] rotate-[45deg]" />
			</li>
		</ul>
	);
}

export default Pagination;
