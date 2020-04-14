import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
    height: '100%'
  },
  content: {
    height: '100%',
  }
})

class Minimal extends React.Component{
  render(){
    const { children } = this.props;

    const classes = useStyles();

    return (
      <div className={classes.root}>
        <main className={classes.content}>{children}</main>
      </div>
    );
  }

}

Minimal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default withStyles()(Minimal);
