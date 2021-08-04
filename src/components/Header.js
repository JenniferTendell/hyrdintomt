import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import header from '../assets/header.jpg'


export default function Header() {
    const style = styles();

    return (
        <header className={style.root}>
            <Typography variant='h1' className={style.logo}>Hyr din tomt</Typography>
            <img className={style.image} src={header} alt='Fence' />
        </header>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    image: {
        width: '100%',
        height: '90vh',
        objectFit: 'cover',
        [theme.breakpoints.down("sm")]: {
            height: '100vh',
        },
    },
    logo: {
        position: 'absolute',
        zIndex: 10,
        fontFamily: 'Bebas Neue, cursive',
        color: 'white',
        fontSize: '10rem',
        textShadow: '1px 1px #C4C4C4',
    }
}));
