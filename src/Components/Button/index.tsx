/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
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
	const [variantBg, setVariantBg] = useState('blue');

	useEffect(() => {
		if (variant === 'Primary') {
			setVariantBg('blue');
		}
		if (variant === 'Secondary') {
			setVariantBg('pink');
		}
		if (variant === 'Success') {
			setVariantBg('green');
		}
		if (variant === 'Error') {
			setVariantBg('red');
		}
		if (variant === 'Warning') {
			setVariantBg('yellow');
		}
		if (variant === 'Transparent') {
			setVariantBg('transparent');
		}
	}, [variant]);
	return (
		<button
			type={type}
			{...props}
			className={`bg-${variantBg}-500 hover:bg-${variantBg}-700 text-white font-bold py-2 px-4 rounded flex`}
		>
			{isLoading && <Loading />}
			{children}
		</button>
	);
}
