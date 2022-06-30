/* eslint-disable react/button-has-type */
import Loading from '../Loading';
import styles from './styles.module.css';
import './button.css';

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

	function createRipple(event: React.MouseEvent<HTMLButtonElement>) {
		const button = event.currentTarget;
		const circle = document.createElement('span');
		const diameter = Math.max(button.clientWidth, button.clientHeight);
		const radius = diameter / 2;

		// eslint-disable-next-line no-multi-assign
		circle.style.width = circle.style.height = `${diameter}px`;
		circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
		circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
		circle.classList.add('ripple');

		const ripple = button.getElementsByClassName('ripple')[0];
		console.log({ button, circle, diameter, radius, ripple });

		if (ripple) {
			ripple.remove();
		}

		button.appendChild(circle);
	}

	return (
		// <button
		// 	type={type}
		// 	{...props}
		// 	className={`${VARIANT[variant || 'Primary'].normal} ${
		// 		VARIANT[variant || 'Primary'].hover
		// 	}  ${styles.btn} ${props.className}`}
		// >
		// 	{isLoading && <Loading />}
		// 	{children}
		// </button>
		<button
			onClick={createRipple}
			type={type}
			{...props}
			className={`${VARIANT[variant || 'Primary'].normal} ${
				VARIANT[variant || 'Primary'].hover
			}  ${styles.btn} ${props.className} button`}
		>
			{isLoading && <Loading />}
			{children}
		</button>
	);
}
