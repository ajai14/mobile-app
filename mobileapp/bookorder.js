// ==========================booking screen [room booking page]==========================================

import React from 'react';
import { View, ScrollView, StyleSheet ,Text ,Image ,TouchableOpacity,} from 'react-native';

import Booking from './Carbookingscreen';

const Bookorder = ({navigation}) => {


  return (  
          <View style={styles.container}>
          <ScrollView>
            <View style={styles.hotel}>
              <Image
                  style={styles.hotelImg}
                  source={{
                  uri: 'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/140591/new-x1-exterior-left-front-three-quarter.jpeg?isig=0&q=80',
                  }}
              />
          
          <Booking
              Hname="BMW X1 Serious"
              details="Details"
              descrip="BMW has revised the X1 petrol lineup by introducing the sDrive18i M Sport variant. Under the hood, there's a 1.5-litre, three-cylinder turbo-petrol engine that delivers 134bhp and 230Nm of torque, coupled with a seven-speed automatic transmission."
              place="Place"
              adderess="📍- Khasra No. 473, 474 & 475, Ring Road Near World Cup Square, Piplyahana Square, Indore 452016 , India."
              amenities="Amenities"
              imageUrl1="https://www.topgear.com/sites/default/files/2023/02/P90484895_highRes_x1-xdrive-23i-m-spor.jpg" 
              imageUrl2="https://cdn.aquelamaquina.pt/images/2022-06/img_944x629$2022_06_01_13_46_58_216398.jpg" 
              imageUrl3="https://pictures.dealer.com/b/bmwannapolisg1a/0806/3e8dfdd8a37fd5a3613a8af8689258efx.jpg" 
              imageUrl4="https://parkers-images.bauersecure.com/wp-images/179965/boot-load-space/675x450/071-bmw-x1-boot.jpg" 
              imageUrl5="https://www.bmw.in/content/bmw/marketIN/bmw_in/en_IN/all-models/x-series/X1/2022/bmw-x1-highlights/jcr:content/par/multicontent_1680647989/tabs/multicontenttab_copy/items/smallteaser/image.transform/smallteaser/image.1665052832677.jpg" 
        
              />

          </View>
          </ScrollView>
          <View style={styles.orderarea}>
              
             <Text style={styles.tprice}> 
              The Car Price
              </Text>
              <Text style={styles.price}>
              Rs. 58.64 Lakh
              </Text>
            <TouchableOpacity style={styles.ord} onPress={(e)=>navigation.navigate('payment')}>
              <Text style={styles.ordbtn}>Book Now</Text>
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
export default Bookorder;

