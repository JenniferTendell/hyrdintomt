import React from 'react'
import { Grid, makeStyles, Paper, Typography } from '@material-ui/core'

/* ICONS */
import CropFreeRoundedIcon from '@material-ui/icons/CropFreeRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';

export default function Cards() {
    const style = styles();

    return (
        <Grid 
            container 
            className={style.root}
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item xs={12} sm={5} md={3}>
                <Paper className={style.card} elevation={3}>
                    <CropFreeRoundedIcon className={style.icon} />
                    <Typography>
                        fr. 220 kvm/tomt
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
                <Paper className={style.card} elevation={3}>
                    <FlashOnRoundedIcon className={style.icon} />
                    <Typography>
                        Tillgång till ström
                    </Typography>
                </Paper> 
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
                <Paper className={style.card} elevation={3}>
                    <WbIncandescentRoundedIcon className={style.icon} />
                    <Typography>
                        Väl belysta
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={5} md={3}>
                <Paper className={style.card} elevation={3}>
                    <SecurityRoundedIcon className={style.icon} />
                    <Typography>
                        2.5m högt stängsel
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        marginTop: '-3rem',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '2rem',
        [theme.breakpoints.down("sm")]: {
            paddingBottom: '1rem',
        },
    },
    icon: {
        color: '#FABD64',
        fontSize: '3rem',
        margin: '1.5rem 0 1rem',
        [theme.breakpoints.down("sm")]: {
            margin: '1rem 0 .5rem',
        },
    },
}));
