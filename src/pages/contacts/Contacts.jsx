import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import { Box } from "@mui/material";
import Header from "../../components/Header";

export default function Contacts() {
    return (
        <Box sx={{ overflowX: "hidden", my: "24px" }}>
            <Box sx={{ mb: "24px" }}>
                <Header
                    title={"CONTACTS"}
                    subTitle={"List of Contacts for Future Reference"}
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
                <DataGrid
                    rows={rows}
                    columns={columns}
                    slots={{
                        toolbar: GridToolbar,
                    }}
                />
            </Box>
        </Box>
    );
}
