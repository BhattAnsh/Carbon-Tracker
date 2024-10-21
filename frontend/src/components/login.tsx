"use client";
import { useState } from "react";
import { Box, TextField, Button, IconButton, InputAdornment, Link } from "@mui/material";
import { Iconify } from "./iconify";
import AuthLayout from "../layout/authLayout";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Login Clicked");
  };

  return (
    <>
        <div className="">
        <AuthLayout title="Sign In">
            <Box display="flex" flexDirection="column" gap={2} width="100%">
                <TextField fullWidth label="Email" type="email" required />
                <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                        <Iconify icon={showPassword ? "solar:eye-bold" : "solar:eye-closed-bold"} />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />

                <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
                sx={{ mt: 2 }}
                >
                Sign In
                </Button>
                <label htmlFor="">Don’t have an account?
                    <Link href="/signup" variant="body2" sx={{ mt: 2 }}>
                    Get Started
                    </Link>
                </label>
            </Box>
            </AuthLayout>
`        </div>
    </>
  );
};

export default Login;
