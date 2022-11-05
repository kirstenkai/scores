import axios from "axios";
import { apiKey, apiUrl } from "./constants/constants";

export const getLeague = async () => {
	return await axios
		.get(`${apiUrl}?league_id=${apiKey}`)
		.then(function (response) {
			return response.data[0];
		})
		.catch(function (error) {
			console.log(`Error: ${error}`);
		});
};

export const getMatches = async () => {
	return await axios
		.get(
			"https://app.sportdataapi.com/api/v1/soccer/matches?apikey=YOUR-APIKEY&season_id=496"
		)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			console.log(`Error: ${error}`);
		});
};
