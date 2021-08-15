import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';


export default function InfoText() {
    const style = styles()

    return (
        <Box className={style.root}>
            <Typography variant='h2'>
                Gråbo
            </Typography>
            <Typography variant='h5'>
                Lekstorps industriväg 7
            </Typography>
            <Typography>
                Tomterna är belägna i Gråbos industriområde, ca 3 mil från Göteborg. 
                Vi erbjuder uthyrning av lager/uppställningsplatser där du som kund kan ställa din båt, husvagn, släpkärra, husbil eller material.
                En perfekt yta som passar likaväl företag som privatperson.
            </Typography> 
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        maxWidth: '40rem',
        margin: '10rem auto',
        textAlign: 'center',
        [theme.breakpoints.down("sm")]: {
            margin: '7rem auto 8rem',
        },
    },
}));