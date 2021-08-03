import React from 'react'
import { Box, makeStyles, Paper } from '@material-ui/core'

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
                <caption>220 kvm/tomt</caption>
            </Paper>
            <Paper className={style.card} elevation={3}>
                <FlashOnRoundedIcon className={style.icon} />
                <caption>Tillgång till ström</caption>
            </Paper>
            <Paper className={style.card} elevation={3}>
                <WbIncandescentRoundedIcon className={style.icon} />
                <caption>Väl belysta</caption>
            </Paper>
            <Paper className={style.card} elevation={3}>
                <SecurityRoundedIcon className={style.icon} />
                <caption>2.5 m högt stängsel</caption>
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
        margin: theme.spacing(3),
        width: theme.spacing(18),
        height: theme.spacing(18),
    },
    icon: {
        color: '#FABD64',
        fontSize: '3rem',
        margin: '1rem 0'
    },
}));
