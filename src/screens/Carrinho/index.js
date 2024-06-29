import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, CheckBox, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import FecharButton from '../../components/FecharButton';
import Icon from 'react-native-vector-icons/Ionicons';

const Price = [ 
  { id: '1', value: 'ITEM'},
  { id: '2', value: 'PREÇO' },
];
const cartItems = [
  {
    id: '1',
    title: 'Item 1',
    price: 20.90,
    image:  '../../../assets/castelo.svg',
    checked: false
  },
  {
    id: '2',
    title: 'Item 2',
    price: 20.90,
    image: '../../../assets/fallen.svg',
    checked: true
  },
  {
  id: '3',
    title: 'Item 3',
    price: 20.90,
    image: '../../../assets/hp.svg',
    checked: true
  },
  {
    id: '4',
      title: 'Item 4',
      price: 20.90,
      image: '../../../assets/teorema.svg',
      checked: true
    }
];

const CartScreen = () => {
  const [items, setItems] = React.useState(cartItems);

  const handleCheck = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const totalPrice = items.reduce((sum, item) => item.checked ? sum + item.price : sum, 0);
  
    const renderPriceItem = ({ item }) => (
      <View style={[styles.itemContainer,, { flex: 1 }]}>
        {item.value === 'ITEM' && (
      <Icon name="book-outline" size={15} color="#000" style={styles.icon} />
    )}
    {item.value === 'PREÇO' && (
      <Icon name="pricetag-outline" size={15} color="#000" style={styles.icon} />
    )}
       <Text style={styles.itemText}>{item.value}</Text>
        
      </View>
    );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <FlatList
        data={Price}
        renderItem={renderPriceItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
      />
      </View>
      <View style={styles.livros}>
      <ScrollView>
        <FlatList
    data={items}
    keyExtractor={item => item.id}
    renderItem={({ item }) => (
      <View style={styles.cartItem}>
        <CheckBox
          value={item.checked}
          onValueChange={() => handleCheck(item.id)}
        />
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
    )}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 150 }}
  />
</ScrollView>
</View>

      <View style={styles.footer}>
        <Text style={styles.totalPrice}>Preço Total: R$ {totalPrice.toFixed(2)}</Text>
        <TouchableOpacity >
          <FecharButton 
          value = "Fechar Pedido"
          />
            
          
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 0.6,
    height: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    paddingVertical:0,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  itemImage: {
    width: 100, 
    height: 100,
    resizeMode: 'contain',
    paddingHorizontal: 78, 
  },
  itemPrice: {
    fontSize: 16,
    paddingHorizontal: 68,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    alignItems: 'center',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#E96E6E',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  itemContainer: {
    flex: 1.2,
    alignItems: 'flex-start',
    paddingHorizontal: 55,
    paddingVertical: 5,
    backgroundColor: 'orange',
    margin: 5,
    borderRadius: -5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: '100%', height: 600 },
    shadowRadius: 5,
    fontWeight: 600,
    fontSize: 90,
  },
   flatListContent: {
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 0,
    marginLeft: -50,
    alignItems:  'flex-end',
    paddingHorizontal:20,
    alignItems:'center'
    
  },
  livros:{
    flex: 5,
    height: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    paddingVertical:0,
  }
});
