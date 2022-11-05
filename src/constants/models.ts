export interface LeaguesModel {
	seasonId: number;
	name: string;
	isCurrent: number;
	countryId: number;
	leagueId: number;
	startDate: string;
	endDate: string;
}

export interface MatchesModel {
	match_id?: number;
	status_code?: number;
	status?: string;
	match_start?: string;
	league_id?: number;
	season_id?: number;
	stage?: {
		stage_id: number;
		name: string;
	};
	group?: {
		group_id?: number;
		group_name?: string;
	};
	round?: {
		round_id?: number;
		name?: string;
		is_current?: null | boolean;
	};
	home_team?: {
		team_id?: number;
		name?: string;
		short_code?: string;
		common_name?: string;
		logo?: string;
		country?: {
			country_id?: number;
			name?: string;
			country_code?: string;
			continent?: string;
		};
	};
	away_team?: {
		team_id?: number;
		name?: string;
		short_code?: string;
		common_name?: string;
		logo?: string;
		country?: {
			country_id?: number;
			name?: string;
			country_code?: string;
			continent?: string;
		};
	};
	stats?: {
		home_score?: number;
		away_score?: number;
		ht_score?: string;
		ft_score: string;
		et_score?: null;
		ps_score?: null;
	};
	venue?: {
		venue_id?: number;
		name?: string;
		capacity?: number;
		city?: string;
		country_id?: number;
	};
}
