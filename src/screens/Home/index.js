import React from "react";
import { Text, ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import PaginaHp from "../PaginaHp/Index";
import ComprarButton from "../../components/ComprarButton";
import ComprarButton2 from  "../../components/ComprarButton2";


export default function Home() {
  
  const navigation = useNavigation();

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
                <TouchableOpacity 
                  onPress={() => navigation.navigate('PaginaHp')} >
                  
                  
                <View style={styles.categoryContainer2}>
                  <View style={styles.imageContainer2}>
                    <Image source={require('../../../assets/hp.svg')} style={styles.image} 
                      />
                  </View>
                  <View style={styles.textContainer2}>
                    <Text style={styles.textPrice}>De R$ 49,90</Text>
                    <Text style={styles.textNewPrice}>POR R$ 29,90</Text>
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
                    <View style={styles.iconContainer}>
                      <Icon name="heart" size={10} color="red"  />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
                

                <View style={styles.categoryContainer}>
                    <View style={styles.imageContainer}>
                      <Image source={require('../../../assets/castelo.svg')}
                        style={styles.image}
                      />
                    </View>
                    <View style={styles.textContainer}>
                      <Text style={styles.textPrice} >De R$ 49,90</Text>
                      <Text style={styles.textNewPrice}>POR R$ 29,90</Text>
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <Text alignItems='center'>R$ 49,90</Text>
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
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
                      <ComprarButton2
                       value="Comprar">
                       
                      </ComprarButton2>
                      <View style={styles.iconContainerFav}>
                      <Icon name="heart" size={10} color='red'  />
                    </View>
                    </View>
                </View>
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
    flex: 0.6, 
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: 'orange',
    backgroundColor: '#FFA553',
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 5
  },
  imageContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
    marginVertical: 0
  },
  image: {
    width: 80, 
    height: 80, 
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 2,
    paddingLeft: 0,
    paddingTop: 0,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: -15
  },
  textPrice: {
    color: '#918A8A',
    fontSize: 8,
    textAlign: 'center',
    marginTop: 0
  },
  textNewPrice: {
    color: "#FF0D0D",
    textAlign: 'center',
    fontSize: 10
  },
  iconContainer: {
    position: 'absolute',
    top: -80,
    left: 100,
    
  },
  iconContainerFav: {
    position: 'absolute',
    top: -80,
    left: 100,
  },
  FavText: {
    fontSize: 20,
    fontWeight: '700',
    paddingLeft:10,
    paddingTop: 10,
  },
  categoryContainer2: {
    flex: 1, 
    height: 200,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: 'orange',
    backgroundColor: '#FFA553',
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingVertical: 10
  },
  imageContainer2: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginVertical: 20
  },

  textContainer2: {
    flex: 0.6,
    paddingLeft: 0,
    paddingTop: 0,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: -19,
    
  }

});


