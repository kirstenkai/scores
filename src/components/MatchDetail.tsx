import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { ReactEventHandler, useState } from "react";
import { Divider, Stack, Toolbar, Tooltip } from "@mui/material";
import { MatchesModel } from "../constants/models";
import CardContainer from "./CardContainer";

const drawerBleeding = 5;

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
	open: boolean;
	toggleDrawer: (arg1: boolean, arg2: MatchesModel) => ReactEventHandler<{}>;
	modalInfo: MatchesModel;
}

const Root = styled("div")(({ theme }) => ({
	height: "100%",
	backgroundColor:
		theme.palette.mode === "light"
			? grey[100]
			: theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "light" ? "#fff" : grey[800],
}));

export default function MatchDetail(props: Props) {
	const { modalInfo, open, toggleDrawer } = props;
	// const [open, setOpen] = useState(false);

	// const toggleDrawer = (newOpen: boolean) => () => {
	// 	setOpen(newOpen);
	// };

	return (
		<Root>
			<CssBaseline />
			<Global
				styles={{
					".MuiDrawer-root > .MuiPaper-root": {
						width: `calc(40% - ${drawerBleeding}px)`,
						overflow: "visible",
					},
				}}
			/>
			{/* <Box sx={{ textAlign: "center", pt: 1 }}>
				<Button onClick={toggleDrawer(true)}>Open</Button>
			</Box> */}
			<SwipeableDrawer
				anchor="right"
				open={open}
				onClose={toggleDrawer(false, modalInfo)}
				onOpen={toggleDrawer(true, modalInfo)}
				swipeAreaWidth={drawerBleeding}
				disableSwipeToOpen={false}
				ModalProps={{
					keepMounted: true,
				}}
			>
				<StyledBox>
					<Typography variant="h6" sx={{ p: 2, color: "text.secondary" }}>
						Game Details
					</Typography>
					<Divider />
				</StyledBox>
				<StyledBox
					sx={{
						px: 2,
						pb: 2,
						height: "100%",
						overflow: "auto",
					}}
				>
					{/* home team vs away team */}

					<Box
						sx={{ display: "flex", justifyContent: "center", paddingTop: 2 }}
					>
						<img src={modalInfo.home_team?.logo} alt="" />
						<img src={modalInfo.away_team?.logo} alt="" />
					</Box>
					<Typography
						variant="h5"
						fontWeight={600}
						textAlign="center"
						padding={3}
					>
						{modalInfo.home_team?.name} vs. {modalInfo.away_team?.name}
					</Typography>

					<CardContainer>
						<Typography variant="subtitle1" paddingBottom={1} fontWeight={600}>
							Summary
						</Typography>
						<Divider />
						{/* map over stats object and populate list*/}
						<Typography paddingTop={1}>
							Stage: {modalInfo.stage?.name}
						</Typography>
						<Typography textTransform={"capitalize"}>
							Status: {modalInfo.status}
						</Typography>
						<Typography>Date: {modalInfo.match_start}</Typography>

						<Typography>Full-Time: {modalInfo.stats?.ft_score}</Typography>
					</CardContainer>
					<Toolbar />
					<CardContainer>
						<Typography variant="subtitle1" paddingBottom={1} fontWeight={600}>
							Game Stats
						</Typography>
						<Divider />
						{/* map over stats object and populate list*/}
						<Typography paddingTop={1}>
							Home Score: {modalInfo.stats?.home_score}
						</Typography>
						<Typography>Away Score: {modalInfo.stats?.away_score}</Typography>
						<Typography>Half-Time: {modalInfo.stats?.ht_score}</Typography>
						<Typography>Full-Time: {modalInfo.stats?.ft_score}</Typography>
					</CardContainer>
					<Toolbar />
					<CardContainer>
						<Typography variant="subtitle1" paddingBottom={1} fontWeight={600}>
							Venue
						</Typography>
						<Divider />
						{/* map over stats object and populate list*/}
						<Typography paddingTop={1}>
							Venue: {modalInfo.venue?.name}
						</Typography>
						<Typography>City: {modalInfo.venue?.city}</Typography>
					</CardContainer>
				</StyledBox>
			</SwipeableDrawer>
		</Root>
	);
}
