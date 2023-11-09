
import React from 'react';
import { View, Text, StyleSheet, ImageBackground ,Image,Button} from 'react-native';


const Logo = ({navigation}) => {
  return (
    <ImageBackground
      source={require('./R.jpg')} // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        
        <Image
        style={styles.tinyLogo}
        source={require('./download.jpg')}
      />
       <Text style={styles.text}>BETH AND ROSE FLOWER SHOP</Text>
       <Button title="Sign up" style={styles.welcome} onPress={(e)=>navigation.navigate('Login')}/>

      </View>

    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire container
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  text: {
    fontSize: 34,
    color: 'black',
    marginTop:50,
    marginBottom:30,
  },
  det:{
     marginTop:10,
     width:400,
     marginBottom:50,
  },
  
  tinyLogo: {
        width: 170,
        height: 170,
        marginTop: -100,
        alignItems : 'center',
      },
});
export default Logo;





