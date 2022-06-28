/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { XCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';
import Button from '../Button';
import CloseButton from '../CloseButton';
import Header from '../Header';
import SaveButton from '../SaveButton';

type Props = {
	children: React.ReactNode;
	side: 'left' | 'right' | 'full';
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	title?: string;
};

export default function Drawler({
	children,
	side,
	isOpen,
	setIsOpen,
	title,
}: Props) {
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
				className={`bg-gray-900 w-screen max-w-${
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
						<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
							<div className="container flex flex-wrap justify-between items-center mx-auto">
								<CloseButton type="button" onClick={() => setIsOpen(false)} />

								<h2>{title}</h2>
								<div className="relative">
									<svg
										role="status"
										className="inline w-9 h-9 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500 absolute"
										viewBox="0 0 100 101"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
											fill="currentColor"
										/>
										<path
											d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
											fill="currentFill"
										/>
									</svg>
									<SaveButton type="button" />
								</div>
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
