import React from 'react'
import { Box, makeStyles, Paper, Typography } from '@material-ui/core'

/* ICONS */
import CropFreeRoundedIcon from '@material-ui/icons/CropFreeRounded';
import FlashOnRoundedIcon from '@material-ui/icons/FlashOnRounded';
import WbIncandescentRoundedIcon from '@material-ui/icons/WbIncandescentRounded';
import SecurityRoundedIcon from '@material-ui/icons/SecurityRounded';

export default function Cards() {
    const style = styles();

    return (
        <Box className={style.root}>
            <Paper className={style.card} elevation={3}>
                <CropFreeRoundedIcon className={style.icon} />
                <Typography>
                    220 kvm/tomt
                </Typography>
            </Paper>
            <Paper className={style.card} elevation={3}>
                <FlashOnRoundedIcon className={style.icon} />
                <Typography>
                    Tillgång till ström
                </Typography>
            </Paper>
            <Paper className={style.card} elevation={3}>
                <WbIncandescentRoundedIcon className={style.icon} />
                <Typography>
                    Väl belysta
                </Typography>
            </Paper>
            <Paper className={style.card} elevation={3}>
                <SecurityRoundedIcon className={style.icon} />
                <Typography>
                    2.5m högt stängsel
                </Typography>
            </Paper>  
        </Box>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '-3rem',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(2),
        width: theme.spacing(20),
        height: theme.spacing(18),
    },
    icon: {
        color: '#FABD64',
        fontSize: '3rem',
        margin: '1.5rem 0 1.2rem'
    },
}));
