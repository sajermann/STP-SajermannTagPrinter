/* eslint-disable react/button-has-type */
import Loading from '../Loading';
import styles from './styles.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
	isLoading?: boolean;
}

export default function Button({ type, isLoading, children, ...props }: Props) {
	return (
		<button
			type={type}
			{...props}
			className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex"
		>
			{isLoading && <Loading />}
			{children}
		</button>
	);
}
