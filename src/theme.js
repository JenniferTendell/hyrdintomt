import { createTheme } from "@material-ui/core";

export const theme = createTheme({
    typography: {
        fontFamily: "'Roboto', sans-serif",
        color: 'pink',

        h2: {
            fontWeight: '500', 
            color: '#423C46',
        },
        h4: {
            fontWeight: '300',
            color: '#423C46',
            marginBottom: '1rem',
        },
        subtitle1: {
            fontSize: '2rem',
            fontWeight: '300',
            color: 'white',
            marginBottom: '2rem',
        },
        subtitle2: {
            fontSize: '1.5rem',
            fontWeight: '400',
            color: 'white',
            marginTop: '1.3rem'
        },   
    },
});