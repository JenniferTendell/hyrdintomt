import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";

export default function Footer() {
  const style = styles();

  return (
    <footer className={style.root}>
        <Grid
            container
            className={style.container}
            justifyContent="center"
            alignItems="center"
        >
            <Grid item className={style.text} xs={11}>
                <Typography variant='subtitle1'>
                    Kontakta oss gärna om frågor och intresse 
                </Typography>
            </Grid>
            <Grid item className={style.text} xs={12} sm={5} md={2.5}>
                <Typography variant='subtitle2'>
                    Kontakt
                </Typography>
                <Typography>
                    hyrdintomt@gmail.com
                </Typography>
                <Typography>
                    <a className={style.teleLink} href="tel:0704137464">0704 13 74 64</a>
                </Typography>
            </Grid>
            <Grid item className={style.text} xs={12} sm={5} md={2.5}>
                <Typography variant='subtitle2'>
                    Adress
                </Typography>
                <Typography>
                    Lekstorps industriväg 7, Gråbo
                </Typography>
            </Grid>
        </Grid>
    </footer>
  );
}

const styles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "4rem 0 3rem",
        backgroundColor: "#25252D",
    },
    container: {
        maxWidth: '60rem',
        margin: '0 auto',
    },
    text: {
        textAlign: 'center',
        color: 'white',
        height: '8rem',
        [theme.breakpoints.down("sm")]: {
            paddingBottom: '10rem',
        },
    },
    teleLink: {
        textDecoration: 'none',
        color: 'white',
    },
}));
