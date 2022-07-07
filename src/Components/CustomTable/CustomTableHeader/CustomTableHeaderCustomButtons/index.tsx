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
		<div className="w-full">
			{isLoading ? <div>Skeleton</div> : <CustomElementHeader />}
		</div>
	);
}
