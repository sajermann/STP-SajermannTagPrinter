import { Moon, Sun } from 'phosphor-react';
import { useEffect, useState } from 'react';
import ButtonIconHeader from '../ButtonIconHeader';

export default function DarkModeOption() {
	const [darkMode, setDarkMode] = useState(true);

	function handleTogle() {
		setDarkMode(!darkMode);
	}

	useEffect(() => {
		const html = document.querySelector('html');
		if (html && darkMode) {
			html.classList.add('dark');
		}
		if (html && !darkMode) {
			html.classList.remove('dark');
		}
	}, [darkMode]);

	return (
		<ButtonIconHeader type="button" onClick={handleTogle}>
			{!darkMode && <Moon size={32} />}
			{darkMode && <Sun size={32} />}
		</ButtonIconHeader>
	);
}
