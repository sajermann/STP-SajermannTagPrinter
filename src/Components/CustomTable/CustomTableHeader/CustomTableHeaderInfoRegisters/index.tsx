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
		<div className="w-full">
			{isLoading ? (
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
