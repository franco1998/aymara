import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from './LayoutBody';
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
          <header>
            <img src={"https://scontent.fluq1-1.fna.fbcdn.net/v/t1.15752-9/87256989_170201877762779_1941255209825075200_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_ohc=YWIlJVk0bTMAX-BMcuL&_nc_ht=scontent.fluq1-1.fna&oh=fde41c840c0d050a997d146851c5c510&oe=5E9D298D"} />
          </header>
        </div>
    </LayoutBody>
  );
}
Banner.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Banner);
