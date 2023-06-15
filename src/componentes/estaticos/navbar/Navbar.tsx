import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{ backgroundColor: "#2D2D2D" }}>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" style={{ color: "lightgrey" }}>
                            BlogPessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                logout
                            </Typography>
                        </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;