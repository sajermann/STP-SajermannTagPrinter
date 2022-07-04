import { ComponentType } from 'react';

type Props = {
	isLoading: boolean;
	customElementHeader: ComponentType;
};

export default function CustomTableHeaderCustomButtons({
	isLoading,
	customElementHeader: CustomElementHeader,
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
				<CustomElementHeader />
			)}
		</div>
	);
}
