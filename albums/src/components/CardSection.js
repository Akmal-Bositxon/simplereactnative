import React from 'React';
import {View} from 'react-native';

const CardSection = (props)=>{
  return (
    <View style={styles.containerStyles}>
    {props.children}
    </View>
  )
}
const styles={
  containerStyles:{
    borderColor:'#ddd',
    backgroundColor:'#fff',
    justifyContent:'flex-start',
    flexDirection:'row',
    borderBottomWidth:1,
    position:'relative',
    padding:5,

  }
}
export default CardSection;
