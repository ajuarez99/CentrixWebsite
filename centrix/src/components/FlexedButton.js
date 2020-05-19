import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import { StyleSheet, css } from "aphrodite";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'
class FlexedButtons extends Component {
  render() {
    return (
      <div className={css(styles.buttonContainer)} >
      <div className={css(styles.left)}>
        
      <Badge variant="secondary">New</Badge>
        
      </div>
      <div className={css(styles.right)}>
        
      <Badge variant="secondary">New</Badge>
        
      </div>
      </div>
    );
  }
}
export default FlexedButtons;

const styles = StyleSheet.create({
  left: {
    float: "left",
    width:'50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color:'red',
    alignSelf: 'stretch',
    height:'80%',
    
   

  },
  right: {
    float:"right",
    width:'50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    height:'80%',
    
    
  },
  buttonContainer: {
     
  },
});
