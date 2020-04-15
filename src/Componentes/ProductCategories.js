import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {ButtonBase,
 Button,
} from '@material-ui/core';
import LayoutBody from './LayoutBody';
import Typography from './Typography';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

class ProductCategories extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      images : [
        {
          url:
            'https://www.arkiplus.com/wp-content/uploads/2013/07/mosaiquismo-sobre-madera4.jpg',
          title: 'Cuadros',
          width: '40%',
          path: '/Cuadros'
        },
        {
          url:
            'https://i.pinimg.com/originals/e4/8f/e7/e48fe74354051e74b3f25e1243f25384.jpg',
          title: 'Espejos',
          width: '20%',
          path: '/Espejos'
        },
        {
          url:
            'https://i.pinimg.com/564x/fa/a1/9f/faa19f4bf129c849fcd3aafce7c39cfd.jpg',
          title: 'Bastidores',
          width: '40%',
          path: '/Bastidores'
        },
        {
          url:
            'https://i.pinimg.com/564x/bc/d3/f7/bcd3f7fe56a4cd9844885aea3ecec204.jpg',
          title: 'Colgantes',
          width: '38%',
          path: '/Colgantes',
        },
        {
          url:
            'https://i.pinimg.com/originals/66/09/3f/66093f1f6b6ab2f4fab7b388a35ac605.jpg',
          title: 'Lajeros',
          width: '38%',
          path: '/Lajeros',
        },
        {
          url:
            'https://i.pinimg.com/564x/bb/33/36/bb33369468858c3eadb16274cb3da380.jpg',
          title: 'Adornos',
          width: '24%',
          path:"/Adornos"
        },
      ],
    }
  }

handleClick(event){
  console.log(event.target.id.toString());
}

  render(){
    const {classes} = this.props
    return (
      <LayoutBody className={classes.root} component="section" marginBottom='true'>
        <div className={classes.images}>
          {this.state.images.map(image => (
            <React.Fragment>
      <React.Fragment>
        <div className={classes.images}>
          {this.state.images.map(image => (
                <ButtonBase
                  key={image.title}
                  className={classes.imageWrapper}
                  style={{
                    width: image.width,
                  }}
                >
                    <div
                      className={classes.imageSrc}
                      style={{
                        backgroundImage: `url(${image.url})`,
                      }}
                    />
                    <div className={classes.imageBackdrop}
                    id={image.title}
                    component={RouterLink}
                    to={image.path}/>
                    <div className={classes.imageButton}
                    id={image.title}
                    onClick={this.handleClick}>
                      <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className={classes.imageTitle}
                        id={image.title}
                      >
                        {image.title}
                        <div className={classes.imageMarked} />
                      </Typography>
                    </div>
                </ButtonBase>
          </React.Fragment>
          ))}
        </div>
=======
          ))}
        </div>

  </React.Fragment>
      </LayoutBody>
    );
  }

}
export default withStyles(styles)(ProductCategories);
