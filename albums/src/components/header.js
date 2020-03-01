import React from 'react';
import {Text, View} from 'react-native';
const Header=(props)=>{
  const {textStyle, viewStyle}=styles;
  return  (
    <View style={viewStyle}>
    <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
  };
  const styles={
    viewStyle:{
      backgroundColor:'#F8F8F8',
      justifyContent:'center',
      alignItems:'center',
      height:50,
      shadowColor:'#000000',
      shadowOffset:{width:2, height:20},
      shadowOpacity:0.9,
      elevation:2,
      position:'relative'

    },
    textStyle:{
      fontSize:20,
      color:'#000000',

    }
  }
  export default Header;
