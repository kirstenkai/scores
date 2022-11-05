import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const appLogo = require("../assets/images/logo.png");
const drawerWidth = 275;

export default function Layout(props: any) {
	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: `calc(100% - ${drawerWidth}px)`,
					ml: `${drawerWidth}px`,
					backgroundColor: "white",
					boxShadow: "none",
					borderBottom: "1px solid #e3e3e3",
				}}
			>
				<Toolbar>
					<Typography
						variant="h5"
						fontWeight={700}
						noWrap
						component="div"
						sx={{ color: "#1F2442" }}
					>
						English Premier League
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						backgroundColor: "#1F2442",
					},
				}}
				variant="permanent"
				anchor="left"
			>
				<Toolbar>
					<img src={appLogo} alt="" style={{ width: "120px" }} />
				</Toolbar>
				<Toolbar />
				{/* Display League information in the sidebar */}
				{/* <CardContainer>
					<Typography variant="subtitle1" fontWeight={600}>
						League Info
					</Typography>
					<Divider/>
				</CardContainer> */}
			</Drawer>

			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
			>
				<Toolbar />
				{props.children}
			</Box>
		</Box>
	);
}
