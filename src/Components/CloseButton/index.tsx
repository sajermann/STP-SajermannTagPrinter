/* eslint-disable react/button-has-type */
import { X } from 'phosphor-react';
import styles from './styles.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
}

export default function CloseButton({ type, ...props }: Props) {
	return (
		<button
			type={type}
			{...props}
			className={`${styles.button} ${props.className}`}
		>
			<X size={30} />
		</button>
	);
}
