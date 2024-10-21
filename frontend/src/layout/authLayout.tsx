"use client";
import { Typography } from "@mui/material";
import "./authLayout.css";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => (
  <div className="layout">
    <div className="card-container">
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        {children}
    </div>
  </div>
);

export default AuthLayout;
