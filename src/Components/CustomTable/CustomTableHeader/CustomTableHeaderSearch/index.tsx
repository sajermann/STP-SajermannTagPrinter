import { ChangeEvent } from 'react';

type Props = {
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	isLoading: boolean;
};

export default function CustomTableHeaderSearch({
	handleSearch,
	isLoading,
}: Props) {
	return (
		<div
			className="w-full"
			// xs={12} sm={3} md={3} lg={3} xl={3}
		>
			{isLoading ? (
				// <Skeleton variant="rectangular" width="100%" height={56} />
				<div>Skeleton</div>
			) : (
				// <TextField
				// 	fullWidth
				// 	id="outlined-search"
				// 	label="Pesquisar"
				// 	type="search"
				// 	variant="outlined"
				// 	onChange={handleSearch}
				// />
				<input id="outlined-search" onChange={handleSearch} />
			)}
		</div>
	);
}
