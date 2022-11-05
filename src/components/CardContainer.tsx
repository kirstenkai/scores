import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function CardContainer(props: any) {
	const { children } = props;
	return (
		<Card sx={{ boxShadow: 4 }}>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
