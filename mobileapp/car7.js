// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from './Carbookingscreen';

const Car7 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://m.media-amazon.com/images/I/81hBLqNhMrL._SX679_.jpg',
                  }}
              />
          
          <Booking
              Hname="FlowerAura Decorative Bunch of 12 Red Live Fresh Roses Flowers Bouquet For Valentine's Day Gifts For Girlfriend, Boyfriend, Wife & Husband, Mother's Day"
              details="Details"
              descrip="."
              place="Place"
              adderess="📍- Plot No 10 C C A Scheme No:94 ec C, Scheme 94 Sector CA, Indore 452010 , India."
              amenities="flower images"
              imageUrl1="https://m.media-amazon.com/images/I/81hBLqNhMrL._SX679_.jpg" 
              imageUrl2="https://m.media-amazon.com/images/I/61olKM8BkaL._SX679_.jpg" 
              imageUrl3="https://m.media-amazon.com/images/I/51-4uVwsJ7L._SX679_.jpg" 
              imageUrl4="https://m.media-amazon.com/images/I/81voV4lvMTL._SX679_.jpg" 
           
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              Price -60% ₹474 M.R.P.: ₹1,199.00M.R.P.: ₹1,199

              </Text>
              <Text style={styles.price}>
              Rs.  ₹474
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('Home')}>
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
export default Car7;

