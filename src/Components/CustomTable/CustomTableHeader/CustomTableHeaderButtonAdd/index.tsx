type Props = {
	handleClickAdd: () => void;
	isLoading: boolean;
};

export default function CustomTableHeaderButtonAdd({
	handleClickAdd,
	isLoading,
}: Props) {
	return (
		<div className="w-full">
			{isLoading ? (
				<div>Skeleton</div>
			) : (
				<button type="button" onClick={handleClickAdd}>
					Adicionar
				</button>
			)}
		</div>
	);
}
