import { useEffect, useState } from 'react';

function getWindowDimensions() {
	const { innerWidth: widthScreen, innerHeight: heightScreen } = window;
	return {
		widthScreen,
		heightScreen,
	};
}

export default function UseWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}
