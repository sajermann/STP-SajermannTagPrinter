/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
// module.exports = {
// 	darkMode: 'class',
// 	content: ['./src/**/*.tsx', './node_modules/tw-elements/dist/js/**/*.js'],
// 	theme: {
// 		extend: {
// 			colors: {
// 				brand: {
// 					300: '#996DFF',
// 					500: '#8257e6',
// 				},
// 			},
// 			borderRadius: {
// 				md: '4px',
// 			},
// 		},
// 	},
// 	plugins: [require('tailwind-scrollbar'), require('tw-elements/dist/plugin')],
// };
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.tsx',
		'./src/**/*.{html,js}',
		'./node_modules/tw-elements/dist/js/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					300: '#996DFF',
					500: '#8257e6',
				},
			},
			borderRadius: {
				md: '4px',
			},
		},
	},
	plugins: [require('tw-elements/dist/plugin'), require('tailwind-scrollbar')],
};
