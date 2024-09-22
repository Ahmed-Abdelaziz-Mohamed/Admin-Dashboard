import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { rows, columns } from "./data";
import Header from "../../components/Header";

export default function Invoices() {
    return (
        <>
            <Box sx={{ my: "24px" }}>
                <Header
                    title={"INVOICES"}
                    subTitle={"List of Invoice Balances"}
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
                    overflowX: "auto", // Enable horizontal scrolling when necessary
                    mx: "auto", // Center the table horizontally
                }}
            >
                <DataGrid
                    rows={rows}
                    columns={columns}
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    checkboxSelection
                />
            </Box>
        </>
    );
}
