import { StyleRules } from '@mui/styles/withStyles';

// se vc quiser exportar o objeto base
export const baseStyles = {
	gridItemFooter: {
		'&.MuiGrid-item': {
			paddingTop: '0px !important',
		},
	},
};

const stylesToMakeStyles = () => {
	const styles = {
		...baseStyles,
	};

	return styles as StyleRules<Record<never, never>, keyof typeof styles>;
};

export default stylesToMakeStyles;
