import { Box } from "@mui/material";
import Line from "./Line";
import Header from "../../components/Header";

export default function LineChart() {
    return (
        <>
            <Box sx={{ my: "24px" }}>
                <Header title={"Line Chart"} subTitle={"Simple Line Chart"} />
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
                    overflowX: "auto", // Enable horizontal scrolling when necessary
                    mx: "auto", // Center the table horizontally
                }}
            >
                <Line />
            </Box>
        </>
    );
}
