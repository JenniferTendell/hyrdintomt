import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

/* IMAGES */
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

export default function Images() {
    const style = styles();

    return (
        <Grid 
            container  
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item xs={12} sm={6}>
                <img className={style.image} src={image1} alt='plot 1' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img className={style.image} src={image2} alt='plot 1' /> 
            </Grid>
            <Grid item xs={12} sm={6}>
                <img className={style.image} src={image3} alt='plot 1' />
            </Grid>
            <Grid item xs={12} sm={6}>
                <img className={style.image} src={image4} alt='plot 1' />
            </Grid>
        </Grid>  
    )
};

const styles = makeStyles((theme) => ({
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '4px',
        boxShadow: '1px 2px 4px 1px rgb(0 0 0 / 20%)'
    },   
}));
