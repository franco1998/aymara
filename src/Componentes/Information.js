import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LayoutBody from './LayoutBody';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import Typography from './Typography'
const styles = theme => ({
    root: {
        height:'100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
    },  
    decoration: {

        height:'45vh',
        overflow:'visible',
        width:'400px',
        background:'#DF51F6',
    },
    card: {
        marginLeft:'-100px',
        marginTop:'5vh',
        boxShadow:'0 4px 4px 1px rgba(0, 0, 0, 0.25)',
        background:'#ffffff',
        height:'35vh',
        width:'600px',
        border:'1px solid #E2E1E2',
        borderRadius:'10px'
    },   
    icon:{
        position:'absolute',
        top:'10vh',
        left:'calc(50wv - 24px)'

    } 
});

function Banner(props) {
  const { classes } = props;

  return (
    <LayoutBody className={classes.root} component="section"  width='full' fullWidth='true' >
        <ArrowDownwardIcon className={classes.icon} color='disabled' fontSize='large'/>
        <div className={classes.decoration}><div className={classes.card}></div></div>
    </LayoutBody>    
  );
}
Banner.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Banner);