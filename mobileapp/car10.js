// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from './Carbookingscreen';

const Car10 = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://m.media-amazon.com/images/I/51q-631fC0L._SX300_SY300_QL70_FMwebp_.jpg',
                  }}
              />
          
          <Booking
              Hname="IRIS Floral Bouquet- Dry flower bouquet, natural material, fragrance with top up spray bottle."
              details="Details"
              descrip="IRIS Floral Bouquet- Dry flower bouquet, natural material, fragrance with top up spray bottle.."
              place="Place"
              adderess="📍- 13 Residency Kibe Compound Behind Mdhumilan Talkies, Indore 452001 , India"
              amenities="Amenities"
              imageUrl1="https://m.media-amazon.com/images/I/81A8vnfR-kL._SX679_.jpg" 
              imageUrl2="https://m.media-amazon.com/images/I/81LH0J7kAvL._SX679_.jpg" 
              imageUrl3="https://m.media-amazon.com/images/I/81ns3cii+dL._SX679_.jpg" 
              imageUrl4="https://m.media-amazon.com/images/I/81N-OJjse2L._SX679_.jpg" 
              // imageUrl5="https://m.media-amazon.com/images/I/51RbBa+H63L._SS75_.jpg" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
               
             <Text style={styles.tprice}> 
              The flower price
              </Text>
              <Text style={styles.price}>
               ₹669
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment')}>
              <Text style={styles.ordbtn}> Now</Text>
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
export default Car10;

