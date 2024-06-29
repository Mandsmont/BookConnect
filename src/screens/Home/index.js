import React from "react";
import { Text, ScrollView, View, StyleSheet, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem-Vindo ao BOOKCONNECT</Text>

      <ScrollView
        scrollEventThrottle={16}
      >
        <View style={{flex: 1}}>
            <Text style={styles.promotionsText}>
                Promoções
            </Text>
          <View style={{height: 130, marginTop: 20}}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.scrollViewContent}
                >
                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/hp.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textPrice}>De R$ 49,90</Text>
                      <Text style={styles.textNewPrice}>POR R$ 29,90</Text>
                      <View style={styles.iconContainer}>
                      <Icon name="heart" size={10} color='white' borderColor='red' />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/castelo.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textPrice}>De R$ 49,90</Text>
                      <Text style={styles.textNewPrice}>POR R$ 29,90</Text>
                      <View style={styles.iconContainer}>
                      <Icon name="heart" size={10} color='white' borderColor='red' />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/fallen.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textPrice}>De R$ 49,90</Text>
                      <Text style={styles.textNewPrice}>POR R$ 29,90</Text>
                      <View style={styles.iconContainer}>
                      <Icon name="heart" size={10} color='white' borderColor='red' />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/teorema.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textPrice}>De R$ 49,90</Text>
                      <Text style={styles.textNewPrice}>POR R$ 29,90</Text>
                      <View style={styles.iconContainer}>
                      <Icon name="heart" size={10} color='white' borderColor='red' />
                    </View>
                    </View>
                </View>

                
            </ScrollView>

          </View>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.FavText}>
                Meus Favoritos
            </Text>
          <View style={{height: 130, marginTop: 20}}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.scrollViewContent}
                >
                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/hp.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/castelo.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/fallen.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/teorema.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                
            </ScrollView>

          </View>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.FavText}>
                Novidades
            </Text>
          <View style={{height: 130, marginTop: 20}}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.scrollViewContent}
                >
                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/hp.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='white'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/castelo.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='white'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/fallen.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='white'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/teorema.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='white'  />
                    </View>
                    </View>
                </View>

                
            </ScrollView>

          </View>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.FavText}>
                Em Alta 
            </Text>
          <View style={{height: 130, marginTop: 20}}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.scrollViewContent}
                >
                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/hp.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/castelo.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/fallen.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/teorema.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                {/* Adicione mais imagens conforme necessário */}
            </ScrollView>

          </View>
        </View>
        <View style={{flex: 1}}>
            <Text style={styles.FavText}>
                Recomendados para Você
            </Text>
          <View style={{height: 130, marginTop: 20}}>
            <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={styles.scrollViewContent}
                >
                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/hp.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/castelo.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/fallen.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/teorema.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text fontSize={15} color= 'black'>R$ 49,90</Text>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>

                {/* Adicione mais imagens conforme necessário */}
            </ScrollView>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingLeft: 5,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#F27706'
  },
  promotionsText: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft:10
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  categoryContainer: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: 'orange',
    backgroundColor: '#FFA553',
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  imageContainer: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100, // Adjust as needed
    height: 100, // Adjust as needed
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1.3,
    paddingLeft: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  textPrice: {
    color: '#918A8A',
    fontSize: 10,
    textAlign: 'center',
  },
  textNewPrice: {
    color: "#FF0D0D",
    textAlign: 'center'
  },
  iconContainer: {
    position: 'absolute',
    top: -80,
    left: 90,
    
  },
  iconContainerFav: {
    position: 'absolute',
    top: -80,
    left: 80,
  },
  FavText: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft:10,
    paddingTop: 10,
  }
});


