// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from './Carbookingscreen';

const Car8 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/0/s/c/rose-2023-kanraj-original-imagu4sjpsfwdmy4.jpeg?q=70',
                  }}
              />
          
          <Booking
              Hname="KanRaj Artificial Flowers with Pot set of 3 Red Wild Flower Artificial Flower with Pot  (6 inch, Pack of 3, Flower with Basket)"
              details="
              KanRaj Artificial Plants With Wooden Pot are a perfect addition to your home or office decor, suitable for both indoor use"
              
              place="Place"
              adderess="📍- 150/3 Hare Krishna Vihaar, Near Iskcon Temple, Nipania, Indore , India."
              amenities="Amenities"
              imageUrl1="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-plant/p/q/d/yes-r-matka-kanraj-original-imagtut3z75an4ur.jpeg?q=70" 
              imageUrl2="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/m/l/e/rose-2023-kanraj-original-imagu4sjm7a4h7z5.jpeg?q=70"
              imageUrl3="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-plant/p/q/d/yes-r-matka-kanraj-original-imagtut3z75an4ur.jpeg?q=70" 
              imageUrl4="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-plant/p/q/d/yes-r-matka-kanraj-original-imagtut3z75an4ur.jpeg?q=70" 
              
              
              
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
               Price
              </Text>
              <Text style={styles.price}>
              Rs.240
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
export default Car8;

