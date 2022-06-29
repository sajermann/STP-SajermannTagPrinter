interface Props extends React.HTMLProps<HTMLButtonElement> {
	children: React.ReactNode;
	type: 'button';
}

export default function ButtonIconHeader({ children, ...props }: Props) {
	return (
		<button
			{...props}
			type="button"
			className="inline-flex items-center p-2 ml-1 text-sm
			text-gray-500 rounded-lg focus:outline-none focus:ring-2
			hover:bg-gray-700 focus:ring-gray-600"
		>
			{children}
		</button>
	);
}
