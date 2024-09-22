import { DownloadOutlined } from "@mui/icons-material";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import { Box, Button, Stack } from "@mui/material";
import Header from "../../components/Header";

export default function Dashboard() {
    return (
        <>
            <Box
                sx={{
                    textAlign: "right",
                    my: "24px",
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
                <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                >
                    <Header
                        title={"DASHBOARD"}
                        subTitle={"Welcome to your dashboard"}
                    />
                    <Button
                        sx={{
                            padding: "6px 8px",
                            textTransform: "capitalize",
                            mr: "30px",
                        }}
                        variant="contained"
                        color="primary"
                    >
                        <DownloadOutlined />
                        Download Reports
                    </Button>
                </Stack>
            </Box>
            <Row1 />
            <Row2 />
            <Row3 />
        </>
    );
}
