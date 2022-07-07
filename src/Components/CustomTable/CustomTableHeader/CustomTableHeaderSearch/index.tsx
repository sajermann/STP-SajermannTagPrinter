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
		<div className="w-full">
			{isLoading ? (
				<div>Skeleton</div>
			) : (
				<label
					className="text-black text-sm font-bold dark:text-white"
					htmlFor="search"
				>
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
