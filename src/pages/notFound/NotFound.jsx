import Typography from "@mui/material/Typography";
import { Stack, useTheme } from "@mui/material";

export default function NotFound() {
    const theme = useTheme();
    return (
        <>
            <Stack
                sx={{ textAlign: "center", alignItems: "center", my: "240px" }}
            >
                <Typography
                    sx={{
                        color: theme.palette.info.light,
                        fontWeight: "bold",
                    }}
                    variant="h2"
                >
                    Error 404
                </Typography>
                <Typography variant="h5">
                    Sorry, something went worng, please try again with the main
                    page
                </Typography>
            </Stack>
        </>
    );
}
