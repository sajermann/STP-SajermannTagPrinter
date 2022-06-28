/* eslint-disable react/button-has-type */
import { FloppyDiskBack, XCircle } from 'phosphor-react';
import Loading from '../Loading';
import styles from './styles.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
	isLoading?: boolean;
}

export default function SaveButton({
	type,
	isLoading,

	...props
}: Props) {
	return (
		<button
			type={type}
			{...props}
			className={`${styles.button} ${props.className}`}
		>
			{isLoading && <Loading />}
			<FloppyDiskBack size={30} />
		</button>
	);
}
