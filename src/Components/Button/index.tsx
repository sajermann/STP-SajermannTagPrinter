/* eslint-disable react/button-has-type */
import Loading from '../Loading';
import styles from './styles.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
	isLoading?: boolean;
	variant?:
		| 'Primary'
		| 'Secondary'
		| 'Success'
		| 'Error'
		| 'Transparent'
		| 'Warning';
}

export default function Button({
	type,
	isLoading,
	children,
	variant,
	...props
}: Props) {
	const VARIANT = {
		Primary: {
			normal: 'bg-blue-500',
			hover: 'hover:bg-blue-700',
		},
		Secondary: {
			normal: 'bg-pink-500',
			hover: 'hover:bg-pink-700',
		},
		Success: {
			normal: 'bg-green-500',
			hover: 'hover:bg-green-700',
		},
		Error: {
			normal: 'bg-red-500',
			hover: 'hover:bg-red-700',
		},
		Warning: {
			normal: 'bg-yellow-500',
			hover: 'hover:bg-yellow-700',
		},
		Transparent: {
			normal: 'bg-transparent-500',
			hover: 'hover:bg-gray-800',
		},
	};

	return (
		<button
			type={type}
			{...props}
			className={`${VARIANT[variant || 'Primary'].normal} ${
				VARIANT[variant || 'Primary'].hover
			}  ${styles.btn} ${props.className}`}
		>
			{isLoading && <Loading />}
			{children}
		</button>
	);
}
