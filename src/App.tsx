import React, { useEffect, useState } from "react";
import "./App.css";
import { getMatches } from "./api";
import { MatchesModel } from "./constants/models";
import Layout from "./components/Layout";
import MTable from "./components/MTable";
import MatchDetail from "./components/MatchDetail";

function App() {
	const [matches, setMatches] = useState<Array<any>>([]);
	const [open, setOpen] = useState(false);
	// pass matches index to setModalInfo
	const [modalInfo, setModalInfo] = useState<MatchesModel | {}>({});

	const toggleDrawer = (newOpen: boolean, matchInfo: MatchesModel) => () => {
		setOpen(newOpen);
		addModalInfo(matchInfo);
	};

	const addModalInfo = (matchObj: MatchesModel) => {
		setModalInfo(matchObj);
	};

	useEffect(() => {
		fetchMatches();
	}, []);

	const fetchMatches = async () => {
		const matchesResult = await getMatches();
		setMatches(matchesResult);
	};

	matches.map((match: MatchesModel) => {
		return match;
	});

	return (
		<>
			<Layout>
				<MTable matches={matches} toggleDrawer={toggleDrawer} />
				{open ? (
					<MatchDetail
						modalInfo={modalInfo}
						open={open}
						toggleDrawer={toggleDrawer}
					/>
				) : null}
			</Layout>
		</>
	);
}

export default App;
