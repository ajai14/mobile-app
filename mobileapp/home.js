
import React from 'react';
import { View, ScrollView, StyleSheet ,TextInput ,Image ,TouchableOpacity} from 'react-native';
import Card from './Card';



const Homepg = ({navigation}) => {

  
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* input seach bar */}
     <View style={styles.seachbar}>
      <TextInput
      />
      {/* seach img btn */}
       {/* <Image
        style={styles.seach}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXOTx3E7DUW2_E5YECBJNM8tUyd0H7AoM5O2c_90&s',
        }}
      /> */}
      {/* loction  butn */}
     
      </View>


      {/* {hotel list } */}
        {/* { hotel 1 } */}
       {/* <TouchableOpacity onPress={(e)=>navigation.navigate('Booking')}>
        <Card
          imageUrl="" 
          title="BMW X1 Serious"
          description="A luxury haven for business and leisure travelers to India."
          adderes="📍- Khasra No. 473, 474 & 475, Ring Road Near World Cup Square, Piplyahana Square, Indore 452016 , India."
        /> }
        </TouchableOpacity>
        {/* { hotel 2 } */}
       <TouchableOpacity onPress={(e)=>navigation.navigate('car2')}>
        
        <Card
           imageUrl="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/x/q/w/5-artificial-chrysanthemum-ball-hydrangea-flowers-for-home-original-imagjzzcrseffzvj.jpeg?q=70" 
           title="Fourwalls Beautiful Decorative Artificial Rose Flower Bouquet for Home décor (26 cm Tall, 10 Flower Stems, Dark/Pink)"
           description="Lovely velvet open roses are bright, colorful, silky smooth, inexpensive and economical, a must have for any type of celebration."
           address="📍- H/1 , Scheme No.54 Vijay Nagar, Indore 452010 , India."
        />
        </TouchableOpacity>
        {/* hotel 3 */}
       <TouchableOpacity onPress={(e)=>navigation.navigate('car3')}>

        <Card
          imageUrl="https://m.media-amazon.com/images/I/31PctPdRttL.jpg" 
          title="Fourwalls Beautiful Decorative Artificial Rose Flower Bouquet for Home décor (26 cm Tall, 10 Flower Stems, White)"
          description="Lovely velvet open roses are bright, colorful, silky smooth, inexpensive and economical, a must have for any type of celebration."
          adderes="📍- Mr 10 Ida Plot No 5 Scheme No 7454 Main Road, Indore 452010 , India."
        />
        </TouchableOpacity>
        {/* hotel 4 */}
       <TouchableOpacity onPress={(e)=>navigation.navigate('car4')}>

        <Card
        imageUrl="https://m.media-amazon.com/images/I/61Osw134nML._SX679_.jpg" 
        title="TIED RIBBONS Set of 12 Artificial Rose Flowers Bunches for Vase (24 cm, White) - Home Decoration Gift Items for Living Room Corner Table Top Bedroom Wedding"
        // description="."
        adderes="📍- 562 Mahatma Gandhi Road Regal Square, Indore 452001 , India. "
        />
       </TouchableOpacity>

        {/* hotel 5 */}
       <TouchableOpacity onPress={(e)=>navigation.navigate('car5')}>

        <Card
          imageUrl="https://m.media-amazon.com/images/I/71wyg0bQveL._SX679_.jpg" 
          title="TIED RIBBONS Set of 12 Artificial Rose Flowers Bunches for Vase (24 cm, Red) - Home Decoration Gift Items for Living Room Corner Table Top Bedroom Wedding"
          description="In the box: 1 Artificial Flower Bunch (12 pieces Rose), Color : Red, Size : 24 cm
          The bunch is useable as an artificial flower bunch for the living room, bedside table, and even suitable for outdoor decor. Its unique dust resistance very easy to clean and will be ensured the long life of the product (Vase not included)."
          address="📍- H-2, Scheme No 54, Meghdoot Garden, Vijay Nagar, Indore 452010 , India."
        />
        </TouchableOpacity>
        {/* hotel 6 */}
       {/* <TouchableOpacity onPress={(e)=>navigation.navigate('car6')}>

        <Card
          imageUrl="https://m.media-amazon.com/images/I/71VOXIg0rpL._SX679_.jpg." 
          title="TIED RIBBONS Set of 12 Artificial Rose Flowers Bunches for Vase (24 cm, Light Pink) - Home Decoration Gift Items for Living Room Corner Table Top Bedroom Wedding (Pot Not Included)"
          description="n the box: 1 Artificial Flower Bunch
          The bunch is useable as an artificial flower bunch for the living room, bedside table, and even suitable for outdoor decor. Its unique dust resistance very easy to clean and will be ensured the long life of the product (Vase not included).."
          address="📍- C-92, Vasant Vihar Vijay Nagar, Indore 452010 , India"
        />
        </TouchableOpacity> */}
        {/* hotel 7 */}
       <TouchableOpacity onPress={(e)=>navigation.navigate('car7')}>

        <Card
          imageUrl="https://m.media-amazon.com/images/I/51oN66NWA1L._SX300_SY300_QL70_FMwebp_.jpg" 
          title="FlowerAura Decorative Bunch of 12 Red Live Fresh Roses Flowers Bouquet For Valentine's Day Gifts For Girlfriend, Boyfriend, Wife & Husband, Mother's Day"
          description="This bunch is of 12 red roses perfect pick for the rose day, promise day, propose day, hug day, kiss day, chocolate day, teddy day and Valentine's day.."
          adderes="📍- Plot No 10 C C A Scheme No:94 ec C, Scheme 94 Sector CA, Indore 452010 , India."
        />
        </TouchableOpacity>
        {/* hotel 8 */}
       <TouchableOpacity onPress={(e)=>navigation.navigate('car8')}>

        <Card
          imageUrl="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/0/s/c/rose-2023-kanraj-original-imagu4sjpsfwdmy4.jpeg?q=70" 
          title="KanRaj Artificial Flowers with Pot set of 3 Red Wild Flower Artificial Flower with Pot  (6 inch, Pack of 3, Flower with Basket)"
          description="
          KanRaj Artificial Plants With Wooden Pot are a perfect addition to your home or office decor, suitable for both indoor use. Its Small size makes it versatile so you can put it pretty much anywhere- console, desk, bookshelf, kitchen, Study Table Bedroom Dining Table or anywhere to add a bit of greenery without taking up a lot of space."
          adderes="📍- 150/3 Hare Krishna Vihaar, Near Iskcon Temple, Nipania, Indore , India."
        />
        </TouchableOpacity>
        {/* hotel 9 */}
       <TouchableOpacity onPress={(e)=>navigation.navigate('car9')}>

        <Card
          imageUrl="https://rukminim2.flixcart.com/image/832/832/xif0q/artificial-flower/n/s/5/1-red-rose-bunch-small-1-megha-flower-original-imagkyhcezykcbgm.jpeg?q=70" 
          title="megha flower Red Rose Red Rose Artificial Flower  (30 inch, Pack of 1, Flower Bunch)"
          description="Sky India Decor your home with Artificial Flower And plant attached to a Home Decoration With Plant, a name known for making good-quality and stylish products"
          address="📍- 27/1 27/2 Village Pigdambar Tehsil Mhow, Indore 453331 , India."
        />
        </TouchableOpacity>
        {/* hotel 10 */}
       <TouchableOpacity onPress={(e)=>navigation.navigate('car10')}>

        <Card
          imageUrl="https://m.media-amazon.com/images/I/51q-631fC0L._SX300_SY300_QL70_FMwebp_.jpg" 
          title="IRIS Floral Bouquet- Dry flower bouquet, natural material, fragrance with top up spray bottle."
          description="Sky India Decor your home with Artificial Flower And plant attached to a Home Decoration With Plant, a name known for making good-quality and stylish products."
          adderes="📍- 13 Residency Kibe Compound Behind Mdhumilan Talkies, Indore 452001 , India"
        />
        </TouchableOpacity>
        {/* Add more cards as needed */}
      </ScrollView>


      {/* nav bottom */}
      
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop:-10,
    marginBottom: 1,
  },
  seachbar:{
    height: 35,
    marginTop:4,

  },
  input: {
    height: 44,
    width:370,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginLeft:7,
    paddingLeft: 13,
    fontSize:18,
  },
  
});

export default Homepg;
