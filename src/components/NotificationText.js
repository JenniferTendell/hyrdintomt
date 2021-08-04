import React from "react";
import { Grid, makeStyles, Box, Typography } from "@material-ui/core";
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";

export default function NotificationText() {
    const style = styles();

    return (
        <Grid 
            container 
            direction="row" 
            justifyContent='center' 
            alignItems='center'
            className={style.root}    
        >
            <Grid item xs={12} sm={12} md={3} >
                <Box className={style.circle}>
                    <BuildRoundedIcon color='secondary' style={{ fontSize: 35 }} />
                </Box>
            </Grid>
            <Grid item className={style.text} xs={12} sm={7} md={6} >
                <Typography variant='h4'>
                    Pågående tomter
                </Typography>
                <Typography>
                    Fler tomter kommer att byggas mitt emot och därför
                    har vi möjlighet att ta emot förslag på önskad storlek om ni tänkt hyra en
                    längre tid.
                </Typography>
            </Grid>
        </Grid>
    );
}

const styles = makeStyles((theme) => ({
    root: {
        margin: '10rem 0',
        [theme.breakpoints.down("sm")]: {
            margin: '6rem 0 7rem',
        },
    },
    circle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "5rem",
        height: "5rem",
        borderRadius: "50%",
        margin: '0 auto 2rem',
        backgroundColor: "#FABD64",
    },
    text: {
        [theme.breakpoints.down("sm")]: {
            textAlign: 'center',
        },
    }
}));
