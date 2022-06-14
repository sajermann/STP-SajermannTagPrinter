/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from 'react';

type Props = {
	children: React.ReactNode;
	side: 'left' | 'right' | 'full';
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
};

export default function Drawler({ children, side, isOpen, setIsOpen }: Props) {
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
				className={` w-screen max-w-${side === 'full' ? 'full' : 'lg'} ${
					configSide.side
				} absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ${
					isOpen ? ' translate-x-0 ' : `${configSide.translate}`
				}`}
			>
				<article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 h-full">
					{children}
				</article>
			</section>
			<section className=" w-screen h-full" onClick={() => setIsOpen(false)} />
		</main>
	);
}
