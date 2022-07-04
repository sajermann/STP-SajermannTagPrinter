type Props = {
	handleClickAdd: () => void;
	isLoading: boolean;
};

export default function CustomTableHeaderButtonAdd({
	handleClickAdd,
	isLoading,
}: Props) {
	return (
		<div
			className="w-full"
			// item xs={12} sm={3} md={3} lg={3} xl={3}
		>
			{isLoading ? (
				// <Skeleton variant="rectangular" width="90%" height={36} />
				<div>Skeleton</div>
			) : (
				// <Button
				// 	data-testid="customTable-buttonAdd"
				// 	variant="contained"
				// 	onClick={handleClickAdd}
				// 	endIcon={<AddBoxIcon />}
				// >
				// 	Adicionar
				// </Button>
				<button type="button">Adicionar</button>
			)}
		</div>
	);
}
