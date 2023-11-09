// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from './Carbookingscreen';

const Car4 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://m.media-amazon.com/images/I/61Osw134nML._SX679_.jpg',
                  }}
              />
          
          <Booking
              Hname="TIED RIBBONS Set of 12 Artificial Rose Flowers Bunches for Vase (24 cm, White) - Home Decoration Gift Items for Living Room Corner Table Top Bedroom Wedding"
              details="Details"
              descrip="In the box: 1 Artificial Flower Bunch
              The bunch is useable as an artificial flower bunch for the living room, bedside table, and even suitable for outdoor decor. Its unique dust resistance very easy to clean and will be ensured the long life of the product (Vase not included).."
              adderess="📍- 562 Mahatma Gandhi Road Regal Square, Indore 452001 , India. "
              amenities="flower images"
              imageUrl1="https://m.media-amazon.com/images/I/61Osw134nML._SX679_.jpg" 
              imageUrl2="https://m.media-amazon.com/images/I/71r0yPccNPL._SX679_.jpg" 
              imageUrl3="https://m.media-amazon.com/images/I/61OTbq4V1YL._SX679_.jpg" 
              imageUrl4="https://m.media-amazon.com/images/I/71FLF6U9erL._SX679_.jpg" 
              imageUrl5="https://m.media-amazon.com/images/I/71gsgjnOWkL._SX679_.jpg" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
               Price
              </Text>
              <Text style={styles.price}>
              Rs.  ₹449
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
export default Car4;

