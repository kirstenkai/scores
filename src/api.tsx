import axios from "axios";
import { apiKey } from "./constants/constants";
import { LeaguesModel, MatchesModel } from "./constants/models";

// Return season id from league endpoint and pass value into season_id key.
// Return start date from league endpoint and pass value into date_from key.

const getLeaguesAPI = `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=${apiKey}&league_id=237`;
const getMatchesAPI = `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${apiKey}&season_id=352&date_from=2020-09-11`;

// export default axios.create({
// 	baseURL: 'https://app.sportdataapi.com/api/v1/soccer'
// })

export const getLeagues = async (): Promise<LeaguesModel> => {
	const results = await axios.get(getLeaguesAPI);
	return results.data.data[0];
};

export const getMatches = async (): Promise<Array<any>> => {
	const result = await axios.get(getMatchesAPI);
	return result.data.data;
};
