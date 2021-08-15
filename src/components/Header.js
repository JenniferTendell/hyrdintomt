import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import header from '../assets/header.jpg'


export default function Header() {
    const style = styles();

    return (
        <header className={style.root}>
            <Box className={style.container}>
                <Typography variant='h1' className={style.logo}>
                    Hyr din tomt
                </Typography>
            </Box>
            <img className={style.image} src={header} alt='Fence' />
        </header>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        [theme.breakpoints.down("xs")]: {
            justifyContent: 'flex-start',
        },
    },
    container: {
        position: 'absolute',
        display: 'flex',
        [theme.breakpoints.down("xs")]: {
            width: '18rem',
            marginLeft: '.8rem',
        },
    },
    logo: {
        fontFamily: 'Bebas Neue, cursive',
        color: 'white',
        fontSize: '13.5rem',
        textShadow: '1px 1px 3px #C4C4C4',
        [theme.breakpoints.down("sm")]: {
            fontSize: '8.5rem',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '10rem',
            paddingBottom: '4rem',
        },
    },
    image: {
        width: '100%',
        height: '90vh',
        objectFit: 'cover',
        [theme.breakpoints.down("sm")]: {
            height: '100vh',
        },
    },
    
}));
