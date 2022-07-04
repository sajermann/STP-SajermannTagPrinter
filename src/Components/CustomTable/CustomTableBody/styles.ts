import { Theme } from '@mui/material';
import { StyleRules } from '@mui/styles/withStyles';

export const baseStyles = {
	gridMainExternal: {
		'&.MuiGrid-item': {
			paddingTop: '0px !important',
		},
	},
	gridMainInternal: {
		display: 'flex',
		flexWrap: 'nowrap',
	},
	noResults: {
		width: '98vw',
		fontWeight: 900,
		fontSize: '3rem',
	},
	cellTable: {
		height: '3rem',
		padding: '0px 5px',
		overflow: 'hidden',
		borderBottom: '1px solid',
	},
};

const stylesToMakeStyles = (theme: Theme) => {
	const styles = {
		...baseStyles,
		gridMain: {
			height: '52vh',
			width: '100%',
			position: 'relative',
			overflow: 'auto',
			margin: '1rem 0',
			scrollSnapType: 'x mandatory',
			'-webkit-overflow-scrolling': 'touch',
			/* width */
			'&::-webkit-scrollbar': {
				width: '5px',
				height: '5px',
			},
			/* Track */
			'&::-webkit-scrollbar-track': {
				boxShadow: 'inset 0 0 5px grey',
				borderRadius: '10px',
			},

			/* Handle */
			'&::-webkit-scrollbar-thumb': {
				background: theme.palette.grey[700],
				borderRadius: '10px',
			},

			/* Handle on hover */
			'&::-webkit-scrollbar-thumb:hover': {
				background: theme.palette.grey[700],
			},
		},
		headerTable: {
			height: '60px',
			position: 'sticky',
			top: 0,
			padding: '0px 5px',
			borderWidth: '0 1px',
			zIndex: 1,
			background: theme.palette.grey[900],
			fontWeight: 700,
		},
	};

	return styles as StyleRules<Record<never, never>, keyof typeof styles>;
};

export default stylesToMakeStyles;
