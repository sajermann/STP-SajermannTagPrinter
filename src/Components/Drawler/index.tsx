/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { List, UserSquare } from 'phosphor-react';
import { useEffect, useState } from 'react';

type Props = {
	children: React.ReactNode;
	side: 'left' | 'right';
};

export default function Drawler({ children, side }: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const [configSide, setConfigSide] = useState({ side: '', translate: '' });

	useEffect(() => {
		if (side === 'left') {
			setConfigSide({ side: 'left-o', translate: '-translate-x-full' });
		} else {
			setConfigSide({ side: 'right-0', translate: 'translate-x-full' });
		}
	}, [side]);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				data-collapse-toggle="mobile-menu-2"
				type="button"
				className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2"
				aria-expanded="false"
			>
				{side === 'right' ? <UserSquare size={32} /> : <List size={32} />}
			</button>

			<main
				className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ${
					isOpen
						? ' transition-opacity opacity-100 duration-500 translate-x-0 '
						: ' transition-all delay-500 opacity-0 translate-x-full'
				}`}
			>
				<section
					className={` w-screen max-w-lg ${
						configSide.side
					} absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ${
						isOpen ? ' translate-x-0 ' : `${configSide.translate}`
					}`}
				>
					<article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
						{children}
					</article>
				</section>
				<section
					className=" w-screen h-full"
					onClick={() => setIsOpen(false)}
				/>
			</main>
		</>
	);
}
