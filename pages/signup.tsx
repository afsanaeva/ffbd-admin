import * as React from 'react';
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from "../pages/image/fanfare_logo.png";
import Form from './form';

export default function ButtonAppBar() {
    return (
        <>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ backgroundColor: "#161F29", paddingTop: "18px" }}>
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Image src={logo} width="152px" height="30px" alt="logo"

                            />
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>

            <Form />

        </>
    );
}
