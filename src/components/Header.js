import { Box, makeStyles } from '@material-ui/core'
import React from 'react'
import header from '../assets/header.jpg'


export default function Header() {
    const style = styles();

    return (
        <Box className={style.root}>
            <h1 className={style.logo}>Hyr din tomt</h1>
            <img className={style.image} src={header} alt='Fence' />
        </Box>
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
    },
    logo: {
        position: 'absolute',
        zIndex: 10,
    }
}));
