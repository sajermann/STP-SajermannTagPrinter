type Props = {
	dataLength: number;
	dataFilteredLength: number;
	isLoading: boolean;
};

export default function CustomTableHeaderInfoRegisters({
	dataLength,
	dataFilteredLength,
	isLoading,
}: Props) {
	return (
		<div
			className="w-full"
			// className={classes.gridDetails}
			// item
			// xs={12}
			// sm={6}
			// md={6}
			// lg={6}
			// xl={6}
		>
			{isLoading ? (
				// <Skeleton variant="rectangular" width="60%" height={32} />
				<div>Skeleton</div>
			) : (
				<>
					{dataLength === dataFilteredLength && (
						<div>{`Exibindo ${dataLength} registro(s) totais`}</div>
					)}
					{dataLength !== dataFilteredLength && (
						<div>
							{`Exibindo ${dataFilteredLength} registro(s) filtrados
								dos ${dataLength} registro(s) existente(s)`}
						</div>
					)}
				</>
			)}
		</div>
	);
}
