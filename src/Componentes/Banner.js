import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from './LayoutBody';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from './Typography'
const styles = theme => ({
    root: {
      position:'relative',
    },  
      images: {
        width:'100%',
        height:'100vh',
        backgroundRepeat:'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: "url('https://s2.best-wallpaper.net/wallpaper/1920x1200/1905/Painting-brushes_1920x1200.jpg')",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageWrapper: {
        color: theme.palette.common.white,
        position: 'relative',
        padding:'1em',
        '&:hover': {
          border: '4px solid currentColor',
        },
      },    
      imageBackdrop: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
      },
});

function Banner(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section"  width='full' fullWidth='true'>
        <div className={classes.images}>
          <ButtonBase className={classes.imageWrapper}>
            <div className={classes.imageBackdrop} />
            <Typography
                  component="h1"
                  variant="h4"
                  color="inherit"
                  className={classes.imageTitle}
                >
                Comenzemos
            </Typography>
          </ButtonBase>
        </div>
    </LayoutBody>    
  );
}
Banner.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Banner);