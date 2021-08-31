import { createTheme } from "@material-ui/core";


export const theme = createTheme({
    palette: {
        primary: {
            main: '#FABD64'
        },
        secondary:{
            main: '#FFF'
        },        
    },

    typography: {
        fontFamily: "'Roboto', sans-serif",
        
        h2: {
            fontWeight: '500', 
            color: '#423C46',
        },
        h4: {
            fontWeight: '400',
            color: '#423C46',
            marginBottom: '.5rem',
            fontSize: '2.5rem',
            '@media (max-width: 600px)': {
                fontSize: '2rem',
                marginBottom: '1rem',
            },
        },
        h5: {
            fontSize: '2rem',
            fontWeight: '300',
            color: '#423C46',
            marginBottom: '2rem',
        },
        subtitle1: {
            fontSize: '2rem',
            fontWeight: '300',
            color: 'white', 
        },
        subtitle2: {
            fontSize: '1.5rem',
            fontWeight: '400',
            color: 'white',
            marginBottom: '.5rem'
        }, 
        body1: {
            fontSize: '1.2rem',    
        }  
    },
});