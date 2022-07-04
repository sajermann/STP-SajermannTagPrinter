export default interface Config {
	data: object[];
	columns: object[];
	general: General;
	handleClickAdd: () => void;
}

interface General {
	isLoading: boolean;
}
