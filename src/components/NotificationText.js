import React from "react";
import { Grid, makeStyles, Box } from "@material-ui/core";
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
            <Grid item xs={12} sm={3} >
                <Box className={style.circle}>
                    <BuildRoundedIcon style={{ color: "white" }} />
                </Box>
            </Grid>
            <Grid item xs={10} sm={5} >
                <h2>Annan storlek?</h2>
                <p>
                    Fler tomter kommer att byggas på samma plats och har därför
                    möjlighet att ta emot förslag på önskad storlek om ni tänkt hyra en
                    längre tid.
                </p>
            </Grid>
        </Grid>
    );
}

const styles = makeStyles((theme) => ({
    root: {
        margin: '5rem 0',
    },
    circle: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "4rem",
        height: "4rem",
        borderRadius: "50%",
        margin: '0 auto',
        backgroundColor: "#FABD64",
    },
}));
