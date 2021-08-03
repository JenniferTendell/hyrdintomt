import React from 'react';
import Cards from './Cards';
import InfoText from './InfoText';
import Images from './Images';
import { makeStyles } from '@material-ui/core';

export default function Main() {
    const style = styles()

    return (
        <main className={style.root}>
            <Cards />
            <InfoText />
            <Images />
        </main>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        maxWidth: '50rem',
        margin: '0 auto',
    }
}))
