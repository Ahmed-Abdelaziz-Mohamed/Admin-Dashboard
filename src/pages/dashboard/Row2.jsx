import {
    Box,
    IconButton,
    Paper,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import Line from "./../lineChart/Line.jsx";
import { DownloadOutlined } from "@mui/icons-material";
import { Transactions } from "./data";

export default function Row2() {
    const theme = useTheme();
    return (
        <>
            <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={2}>
                <Paper
                    sx={{
                        maxWidth: 900,
                        flexGrow: 1,
                        maxHeight: 450,
                        minWidth: 400,
                    }}
                >
                    <Stack
                        direction={"row"}
                        flexWrap={"wrap"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Box>
                            <Typography
                                color={theme.palette.secondary.main}
                                mb={1}
                                mt={2}
                                ml={4}
                                variant="h6"
                            >
                                Reveune Generated
                            </Typography>
                            <Typography variant="body2" ml={4}>
                                $59,342,32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlined />
                            </IconButton>
                        </Box>
                    </Stack>
                    <Line isDashboard={true} />
                </Paper>
                <Box
                    sx={{
                        flexGrow: 1,
                        minWidth: "250px",
                        maxHeight: 450,
                        overflow: "auto",
                    }}
                >
                    <Paper>
                        <Typography
                            color={theme.palette.secondary.main}
                            fontWeight={"bold"}
                            p={1.2}
                            variant="h6"
                        >
                            Recent Transactins
                        </Typography>
                    </Paper>
                    {Transactions.map((transaction) => {
                        return (
                            <Paper
                                key={transaction.txId}
                                sx={{
                                    mt: 0.4,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Box p={1.2}>
                                    <Typography variant="body1">
                                        {transaction.txId}
                                    </Typography>
                                    <Typography variant="body2">
                                        {transaction.user}{" "}
                                    </Typography>
                                </Box>
                                <Typography variant="body1">
                                    {transaction.date}{" "}
                                </Typography>

                                <Typography
                                    borderRadius={1.4}
                                    p={1}
                                    bgcolor={theme.palette.error.main}
                                    color={theme.palette.getContrastText(
                                        theme.palette.error.main
                                    )}
                                    variant="body2"
                                >
                                    ${transaction.cost}
                                </Typography>
                            </Paper>
                        );
                    })}
                </Box>
            </Stack>
        </>
    );
}
