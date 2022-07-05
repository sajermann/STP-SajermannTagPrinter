import { ChangeEvent } from 'react';
import styles from './styles.module.css';

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
				<label
					className="text-black text-sm font-bold dark:text-white"
					htmlFor="search"
				>
					Pesquisar
					<input
						id="search"
						type="search"
						className={styles.input}
						placeholder="Pesquisar"
						onChange={handleSearch}
					/>
				</label>
			)}
		</div>
	);
}
