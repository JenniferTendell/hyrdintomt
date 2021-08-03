import { Box, makeStyles } from '@material-ui/core'
import React from 'react'

export default function InfoText() {
    const style = styles()

    return (
        <Box className={style.root}>
            <h2>Gråbo</h2>
            <h4>Lekstorps industriväg 7</h4>
            <p>Tomterna är belägna i Gråbos industriområde som är på uppgång, ca 3 mil från Göteborg. 
                Vi erbjuder uthyrning av lager/uppställningsplatser, här kan du exempelvis ställa din båt, husvagn, släpkärra, husbil eller material.
                En perfekt yta som passar likaväl företag som privatperson.</p> 
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        maxWidth: '30rem',
        margin: '6rem auto',
        padding: '1.5rem',
    },
}));