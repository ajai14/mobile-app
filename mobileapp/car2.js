// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from './Carbookingscreen';

const Car2 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/x/q/w/5-artificial-chrysanthemum-ball-hydrangea-flowers-for-home-original-imagjzzcrseffzvj.jpeg?q=70',
                  }}
              />
          
          <Booking
              Hname="Fourwalls Beautiful Decorative Artificial Rose Flower Bouquet for Home décor (26 cm Tall, 10 Flower Stems, Dark/Pink)"
              adderess="📍- H/1 , Scheme No.54 Vijay Nagar, Indore 452010 , India."
              amenities="flower images"
              imageUrl1="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/y/s/5/5-artificial-chrysanthemum-ball-hydrangea-flowers-for-home-original-imaggzgzabhtmzjq.jpeg?q=70" 
              imageUrl2="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/l/s/e/5-artificial-chrysanthemum-ball-hydrangea-flowers-for-home-original-imaggzgzrawh97kx.jpeg?q=70" 
              imageUrl3="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/l/s/e/5-artificial-chrysanthemum-ball-hydrangea-flowers-for-home-original-imaggzgzrawh97kx.jpeg?q=70" 
             
              
        
              />
 
          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              Price
              </Text>
              <Text style={styles.price}>
              Rs. 469
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment')}>
              <Text style={styles.ordbtn}>Buy Now</Text>
            </TouchableOpacity>
     
          </View>
          </View>
  );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      marginTop:15,
    },
    hotelImg: {
      width: '100%',
      height: 300, // Adjust the height as needed
      borderRadius: 10,
      marginBottom: -10,
    },
    orderarea:{
      width: '100%',
      height: 80, // Adjust the height as needed
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: 'linen',
      
    },
    tprice:{
      fontSize: 14,
      marginTop:19,
      marginLeft: 36,
      marginRight:5,
      color: 'gray',
      fontWeight: 'bold',
    },
    price:{
      fontSize: 20,
      marginTop:5,
      fontWeight: 'bold',
      marginLeft: 30,
      marginRight:5,
    },
    ord:{
        width: '43%',
        height: 50, // Adjust the height as needed
        borderRadius: 10,
        marginLeft:190,
        marginBottom: 10,
        marginTop:-46,
        backgroundColor:'blue',
      },
    ordbtn:{
        textAlign:'center',
        marginBottom: 10,
        marginTop:9,
        fontWeight: 'bold',
        fontSize: 23,
        color: 'white',
    },
  });
export default Car2;

