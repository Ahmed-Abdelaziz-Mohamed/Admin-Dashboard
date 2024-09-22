import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import {
    AdminPanelSettingsOutlined,
    LockOpenOutlined,
    SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";
// import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();

    // field ==> Reqird
    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 33,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "name",
            headerName: "name",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "email",
            headerName: "email",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "age",
            headerName: "age",
            width: 33,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "phone",
            headerName: "phone",
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "access",
            headerName: "access",
            width: 150,
            align: "center",
            headerAlign: "center",
            renderCell: ({ row: { access } }) => {
                return (
                    <Box
                        sx={{
                            p: "5px",
                            width: "150px",
                            borderRadius: "3px",
                            textAlign: "center",
                            display: "flex",
                            overflowX: "auto",
                            justifyContent: "space-evenly",
                            mx: "auto",
                            backgroundColor:
                                access === "Admin"
                                    ? theme.palette.primary.dark
                                    : access === "Manager"
                                    ? theme.palette.secondary.dark
                                    : "#3da58a",
                        }}
                    >
                        {access === "Admin" && (
                            <AdminPanelSettingsOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}

                        {access === "Manager" && (
                            <SecurityOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}

                        {access === "User" && (
                            <LockOpenOutlined
                                sx={{ color: "#fff" }}
                                fontSize="small"
                            />
                        )}

                        <Typography sx={{ fontSize: "13px", color: "#fff" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    return (
        <Box sx={{ my: "24px" }}>
            <Box sx={{ my: "24px" }}>
                <Header title={"TEAM"} subTitle={"Managing the Team Members"} />
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
                    // @ts-ignore
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Team;
