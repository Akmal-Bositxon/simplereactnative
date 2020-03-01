import React from 'React';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button'
const AlbumDetails=(props)=>{
  return(
    <Card>
        <CardSection>
        <View style={styles.imageContainerStyle}>
        <Image
        style={styles.thumbnailStyle}
        source={{uri:props.album.thumbnail_image}}
         />
        </View>
        <View style={styles.headerContentStyle}>
        <Text style={styles.headerTextStyle}>{props.album.title}</Text>
        <Text style={styles.textStyle}>{props.album.artist}</Text>
        </View>
        </CardSection>
        <CardSection>
        <Image
        style={styles.imageStyle}
        source={{uri:props.album.image}}
        />
        </CardSection>
        <CardSection>
          <Button pressed={()=>Linking.openURL(props.album.url)}>Buy Now</Button>
        </CardSection>
    </Card>
  )
}
const styles={
  headerContentStyle:{
    justifyContent:'space-around',
    flexDirection:'column',
  },
  headerTextStyle:{
    fontSize:18,
    color:'#000'
  },
  textStyle:{
    color:'#000',
  },
  imageStyle:{
    height:300,
    flex:1,
    width:null
  },
  imageContainerStyle:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10,
    marginRight:10
  },
  thumbnailStyle:{
    width:50,
    height:50,
    borderRadius:5
  }
}
export default AlbumDetails;
