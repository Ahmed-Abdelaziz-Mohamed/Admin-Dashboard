import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import Header from "../../components/Header";

const persons = [
    {
        value: "Admin",
        label: "Admin",
    },
    {
        value: "Manager",
        label: "Manager",
    },
    {
        value: "User",
        label: "User",
    },
];

const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regPhone = /^01[0125][0-9]{8}$/;

export default function Form() {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const onSubmit = (data) => {
        console.log(data);
        handleClick();
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <>
            <Box sx={{ my: "24px" }}>
                <Header
                    title={"CREATE USER"}
                    subTitle={"Create a New User Profile"}
                />
            </Box>
            <Box
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    width: {
                        xs: "340px", // Extra small devices (e.g., mobile)
                        sm: "500px", // Small devices
                        md: "800px", // Medium devices (e.g., tablets)
                        lg: "1100px", // Large devices (e.g., desktops)
                        xl: "1300px", // Extra large devices
                    },
                    mx: "auto",
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Stack direction={"row"} gap={2}>
                    <TextField
                        id="firstName"
                        label="First Name"
                        variant="outlined"
                        type="text"
                        sx={{ flex: 1 }}
                        error={Boolean(errors.firstName)}
                        helperText={
                            errors.firstName
                                ? "This Field is required & min 4 characters"
                                : ""
                        }
                        {...register("firstName", {
                            required: true,
                            minLength: 5,
                        })}
                    />
                    <TextField
                        id="lastName"
                        label="Last Name"
                        variant="outlined"
                        type="text"
                        sx={{ flex: 1 }}
                        error={Boolean(errors.lastName)}
                        helperText={
                            errors.lastName
                                ? "This Field is required & min 3 characters"
                                : null
                        }
                        {...register("lastName", {
                            required: true,
                            minLength: 5,
                        })}
                    />
                </Stack>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    error={Boolean(errors.email)}
                    helperText={
                        errors.email ? "The email must be valid one." : ""
                    }
                    {...register("email", {
                        required: true,
                        pattern: regEmail,
                    })}
                />
                <TextField
                    id="contactNumber"
                    label="Contact Number"
                    variant="outlined"
                    type="text"
                    error={Boolean(errors.contactNumber)}
                    helperText={
                        errors.contactNumber
                            ? "The Phone must be a valid Egyption Number"
                            : ""
                    }
                    {...register("contactNumber", {
                        required: true,
                        pattern: regPhone,
                    })}
                />
                <TextField
                    id="address1"
                    label="Address1"
                    variant="outlined"
                    type="text"
                />
                <TextField
                    id="address2"
                    label="Address2"
                    variant="outlined"
                    type="text"
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Role"
                    defaultValue="User"
                >
                    {persons.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{ textAlign: "right" }}>
                    <Button
                        sx={{ textTransform: "capitalize" }}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Create New User
                    </Button>
                    <Snackbar
                        open={open}
                        autoHideDuration={1500}
                        onClose={handleClose}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                        <Alert
                            onClose={handleClose}
                            severity="success"
                            variant="filled"
                            sx={{ width: "100%" }}
                        >
                            The User created successfully!
                        </Alert>
                    </Snackbar>
                </Box>
            </Box>
        </>
    );
}
