import Bar from "./Bar";
import { Box } from "@mui/material";
import Header from "../../components/Header";

export default function BaChart() {
    return (
        <>
            <Box sx={{ my: "24px" }}>
                <Header
                    title={"Bar Char"}
                    subTitle={
                        "The minimum wage in Germany, France and Spain (EUR/month)"
                    }
                />
            </Box>
            <Box
                sx={{
                    height: 600, // Responsive width using Material UI breakpoints
                    width: {
                        xs: "340px", // Extra small devices (e.g., mobile)
                        sm: "500px", // Small devices
                        md: "800px", // Medium devices (e.g., tablets)
                        lg: "1100px", // Large devices (e.g., desktops)
                        xl: "1300px", // Extra large devices
                    },
                    overflowX: "hidden", // Enable horizontal scrolling when necessary
                    mx: "auto", // Center the table horizontally
                }}
            >
                <Bar />
            </Box>
        </>
    );
}
