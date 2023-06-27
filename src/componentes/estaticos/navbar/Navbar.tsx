import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';
import { addToken } from '../../../store/tokens/Actions';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        alert("Usuário deslogado")
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense" style={{ backgroundColor: "#2D2D2D" }}>
                <Box className='cursor' >
                    <Typography variant="h5" style={{ color: "lightgrey" }}>
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to='/home' className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/posts' className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/temas' className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to='/formularioTema' className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" style={{ color: "lightgrey" }}>
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" style={{ color: "lightgrey" }}>
                            logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;