import StatsType from './StatsType';

type UserType = {
	account: {
		level: number;
	};
	global_stats: {
		duo: StatsType;
		solo: StatsType;
		squad: StatsType;
		trio: StatsType;
	};
	name: string;
};

export default UserType;
