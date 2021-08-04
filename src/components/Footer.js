import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

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
            <Grid item className={style.text} xs={12}>
                <h2>Maila gärna om frågor och intresse. </h2>
            </Grid>
            <Grid item className={style.text} xs={12} sm={4} md={2.5}>
                <h3>Kontakt</h3>
                <p>hyrdintomt@gmail.com</p>
            </Grid>
            <Grid item className={style.text} xs={12} sm={4} md={2.5}>
                <h3>Adress</h3>
                <p>Lekstorps industriväg 7, Gråbo</p>
            </Grid>
            <Grid item className={style.logo} xs={12}>
                <h2>Hyr din tomt</h2>
            </Grid>
        </Grid>
    </footer>
  );
}

const styles = makeStyles((theme) => ({
    root: {
        width: "100%",
        padding: "2rem 0",
        marginTop: "5rem",
        backgroundColor: "#25252D",
    },
    container: {
        maxWidth: '60rem',
        margin: '0 auto',
    },
    text: {
        textAlign: 'center',
        color: 'white',
    },
    logo: {
        textAlign: 'center',
        color: 'white',
        marginTop: '2rem'
    },
}));
