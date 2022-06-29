/* eslint-disable react/button-has-type */
import { Check, FloppyDiskBack, X } from 'phosphor-react';
import { useEffect, useState } from 'react';
import delay from '../../Utils/Delay';
import styles from './styles.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
	type: 'button' | 'reset' | 'submit';
	isLoading?: boolean;
	onSave: () => void;
	inSuccess?: {
		success: boolean;
		setSuccess: (data: boolean) => void;
		setIsOpen: (data: boolean) => void;
	};
	inFailed?: {
		failed: boolean;
		setFailed: (data: boolean) => void;
	};
}

export default function SaveButton({
	type,
	isLoading,
	onSave,
	inSuccess,
	inFailed,
	...props
}: Props) {
	const [successInternal, setSuccessInternal] = useState(false);
	const [failedInternal, setFailedInternal] = useState(false);

	async function success() {
		setSuccessInternal(true);
		await delay(3000);
		setSuccessInternal(false);
		inSuccess?.setSuccess(false);
		if (inSuccess?.setIsOpen) {
			inSuccess.setIsOpen(false);
		}
	}

	async function failed() {
		setFailedInternal(true);
		await delay(3000);
		setFailedInternal(false);
		inFailed?.setFailed(false);
	}

	useEffect(() => {
		if (!inSuccess?.success) {
			return;
		}
		success();
	}, [inSuccess?.success]);

	useEffect(() => {
		if (!inFailed?.failed) {
			return;
		}
		failed();
	}, [inFailed?.failed]);

	function handleClick() {
		if (successInternal || failedInternal) {
			return;
		}
		onSave();
	}

	return (
		<div className={styles.container}>
			{isLoading && (
				<div className={styles.containerSpiner}>
					<div className={styles.spiner} role="status" />
				</div>
			)}
			<button
				type={type}
				className={`${styles.button} ${props.className} ${
					successInternal && styles.success
				} ${failedInternal && styles.failed}`}
				onClick={handleClick}
			>
				{successInternal && <Check size={30} />}
				{failedInternal && <X size={30} />}
				{!successInternal && !failedInternal && <FloppyDiskBack size={30} />}
			</button>
		</div>
	);
}
