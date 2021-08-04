import React from 'react';
import Cards from './Cards';
import InfoText from './InfoText';
import Images from './Images';
import NotificationText from './NotificationText';
import { makeStyles } from '@material-ui/core';

export default function Main() {
    const style = styles()

    return (
        <main className={style.root}>
            <Cards />
            <InfoText />
            <Images />
            <NotificationText />
        </main>
    )
};

const styles = makeStyles((theme) => ({
    root: {
        maxWidth: '60rem',
        margin: '0 auto',
        padding: '0 1rem',
    }
}))
