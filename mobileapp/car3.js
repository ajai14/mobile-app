// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from './Carbookingscreen';

const Car3 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://m.media-amazon.com/images/I/31PctPdRttL.jpg',
                  }}
              />
          
          <Booking
              Hname="Fourwalls Beautiful Decorative Artificial Rose Flower Bouquet for Home décor (26 cm Tall, 10 Flower Stems, White)"
              // details="Details"
              descrip="Lovely velvet open roses are bright, colorful, silky smooth, inexpensive and economical, a must have for any type of celebration"
              amenities="flower images"
              imageUrl1="https://m.media-amazon.com/images/I/51JK0mPe8RL.jpg" 
              imageUrl2="https://m.media-amazon.com/images/I/41ai6KMwVpL.jpg" 
              imageUrl3="https://m.media-amazon.com/images/I/31NaF3pJ+mL.jpg" 
              imageUrl4="https://m.media-amazon.com/images/I/41UzwLQ87kL.jpg" 
              // imageUrl5="" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
               Price
              </Text>
              <Text style={styles.price}>
              Rs.  ₹360
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
export default Car3;

