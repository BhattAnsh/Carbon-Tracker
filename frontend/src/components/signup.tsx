"use client";
import { useState } from "react";
import { Box, TextField, Button, IconButton, InputAdornment, Link } from "@mui/material";
import { Iconify } from "./iconify";
import AuthLayout from "../layout/authLayout";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    console.log("Signup Clicked");
  };

  return (
    <AuthLayout title="Create Account">
      <Box display="flex" flexDirection="column" gap={2} width="100%">
        <TextField fullWidth label="Full Name" type="text" required />
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
          onClick={handleSignup}
          sx={{ mt: 2 }}
        >
          Sign Up
        </Button>

        <Link href="/login" variant="body2" sx={{ mt: 2 }}>
          Already have an account? Sign In
        </Link>
      </Box>
    </AuthLayout>
  );
};

export default Signup;
