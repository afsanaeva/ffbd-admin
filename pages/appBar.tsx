import * as React from "react";
import Image from "next/image";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../pages/image/fanfare_logo.png";
import { CloseButton } from "react-bootstrap";
import style from "../styles/signup.module.css";

export default function SignUp() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          style={{ backgroundColor: "#161F29", paddingTop: "18px" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Image src={logo} width="152px" height="30px" alt="logo" />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className="container d-flex justify-content-between mt-5 mb-3">
        <h1 className={style.createBrandText}>Create Brand</h1>
        <CloseButton className={style.CloseBtn} />
      </div>
    </>
  );
}
