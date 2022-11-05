import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";

interface Column {
	id: string;
	label: string;
}

const columns: Column[] = [
	{ id: "home_team", label: "Home Team" },
	{ id: "stats.ft_score", label: "Scores" },
	{ id: "away_team.name", label: "Away Team" },
	{ id: "match_start", label: "" },
];

export default function MTable(props: any) {
	const { matches, toggleDrawer } = props;
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value);
		setPage(0);
	};

	return (
		<Paper sx={{ width: "100%", overflow: "hidden" }}>
			<TableContainer sx={{ height: "80vh" }}>
				<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
							{columns.map((column) => (
								<TableCell>{column.label}</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{matches
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((match: any, index: number) => {
								return (
									<TableRow
										hover
										role="checkbox"
										tabIndex={-1}
										key={match.match_id}
										onClick={toggleDrawer(true, {...match})}
									>
										<TableCell>
											<img
												src={match.home_team.logo}
												alt=""
												style={{ width: "50px" }}
											/>
											{match.home_team.name}
										</TableCell>
										<TableCell>{match.stats.ft_score}</TableCell>
										<TableCell>
											<img
												src={match.away_team.logo}
												alt=""
												style={{ width: "50px" }}
											/>
											{match.away_team.name}
										</TableCell>
										<TableCell>{match.match_start}</TableCell>
									</TableRow>
								);
							})}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[10, 25, 100]}
				component="div"
				count={matches.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</Paper>
	);
}
