import { makeStyles, Typography, Grid } from '@material-ui/core';
// import { Link as ScrollLink } from "react-scroll";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(25),
            marginBottom: theme.spacing(0.1),
        },
    },
    arrowUp: {
        clipPath: 'polygon(85% 100%, 72.5% 80%, 60% 90%, 50% 78%, 40% 90%, 27.5% 78%, 15% 100%, 0 40%, 50% 0, 100% 40%)',
        transition: '300ms',
        '&:hover': {
            cursor: 'pointer',
            color: '#faf8f7',
            backgroundColor: '#1E3D59',
            height: '60px',
            width: '50px',
            paddingTop: '10px',
            paddingBottom: '30px',
        },
    },
    attributions: {
        fontSize: '6px',
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '15px 5px 5px 5px',
    },
    
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="column" justify="center" alignItems="center" >
                {/* <Grid item>
                    <ScrollLink activeClass="active" to="introductionContainer" spy={true} smooth={true} offset={0} delay={0.7} duration={350}>
                        <ArrowDropUpIcon fontSize='large' className={classes.arrowUp} />
                    </ScrollLink>
                </Grid> */}
                <Grid item>
                    <Typography variant="body1">Designed &amp; Built by Norris Co - 2021</Typography>
                </Grid>

            </Grid>
            <div className={classes.attributions}>
                <Typography variant="body4"><a href='https://icons8.com/' target='_blank' style={{textDecoration: 'none', filter: 'opacity(0.4)'}}>Icons8</a></Typography>
            </div>
        </div>
    )
}

export default Footer;