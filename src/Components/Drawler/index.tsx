/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';
import CloseButton from '../CloseButton';
import SaveButton from '../SaveButton';

interface ISide {
	side: 'left' | 'right';
	onSave?: () => never;
}

interface ISideFull {
	side: 'full';
	onSave: () => void;
}

type Props = {
	children: React.ReactNode;
	isOpen: boolean;
	isLoading?: boolean;
	setIsOpen: (isOpen: boolean) => void;
	title?: string;
	inSuccess?: {
		success: boolean;
		setSuccess: (data: boolean) => void;
		setIsOpen: (data: boolean) => void;
	};
	inFailed?: {
		failed: boolean;
		setFailed: (data: boolean) => void;
	};
};

type Batata = Props & (ISide | ISideFull);

export default function Drawler({
	children,
	side,
	isOpen,
	setIsOpen,
	title,
	isLoading,
	onSave,
	inSuccess,
	inFailed,
}: Batata) {
	const [configSide, setConfigSide] = useState({ side: '', translate: '' });

	useEffect(() => {
		if (side === 'left') {
			setConfigSide({ side: 'left-0', translate: '-translate-x-full' });
		}
		if (side === 'right') {
			setConfigSide({ side: 'right-0', translate: 'translate-x-full' });
		}

		if (side === 'full') {
			setConfigSide({ side: 'right-0', translate: 'translate-y-full' });
		}
	}, [side]);

	useEffect(() => {
		const body = document.querySelector('body');
		if (isOpen) {
			if (body) {
				body.classList.add('overflow-hidden');
			}
		} else if (body) {
			body.classList.remove('overflow-hidden');
		}
	}, [isOpen]);

	return (
		<main
			className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
				isOpen
					? ' transition-opacity opacity-100 duration-500 translate-x-0 '
					: ' transition-all delay-500 opacity-0 translate-x-full'
			}`}
		>
			<section
				className={`bg-slate-300 text-black dark:bg-gray-900 dark:text-white w-screen max-w-${
					side === 'full' ? 'full' : 'lg'
				} ${
					configSide.side
				} absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ${
					isOpen ? ' translate-x-0 ' : `${configSide.translate}`
				}`}
			>
				<article
					className={`relative w-screen ${
						side === 'full' ? 'w-full' : 'max-w-lg'
					} pb-10 flex flex-col space-y-6 h-full`}
				>
					{side === 'full' && (
						<nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-800">
							<div className="container flex flex-wrap justify-between items-center mx-auto">
								<CloseButton
									disabled={isLoading}
									type="button"
									onClick={() => setIsOpen(false)}
								/>

								<h2 className="text-white">{title}</h2>

								<SaveButton
									onSave={onSave}
									type="button"
									isLoading={isLoading}
									inSuccess={inSuccess}
									inFailed={inFailed}
								/>
							</div>
						</nav>
					)}
					{isOpen && children}
				</article>
			</section>
			<section className=" w-screen h-full" onClick={() => setIsOpen(false)} />
		</main>
	);
}
