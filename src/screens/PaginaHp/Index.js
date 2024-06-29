import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ComprarButton from "../../components/ComprarButton";
import { Switch } from 'react-native-paper';

const PaginaHp = () => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  const data = [
    { key: '1', label: 'Lido' },
    { key: '2', label: 'Review' }
  ];

  // Função para renderizar cada item da lista
  const renderItem = ({ item }) => (
    <View style={styles.switchContainer}>
      <Text style={styles.text}>{item.label}</Text>
      {item.label === 'Lido' ? (
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      ) : (
        <Icon name="star" size={20} color="yellow" />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Harry Potter - E o enigma do Príncipe</Text>
      <ScrollView>
      <View style={styles.categoryContainer}>
        <Icon name="heart" size={30} color="red"  />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assets/hp.svg')}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textPrice}> R$ 29,90</Text>
        <TouchableOpacity>
          <ComprarButton value="Comprar" />
        </TouchableOpacity>
      </View>
      <FlatList 
        data={data}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.flatListContainer}
      />
      
      <View style={styles.textContainer}>
        <Text style={styles.textdes}> Descrição</Text>
        <Text style={styles.textdeshp}> Harry Potter e o Enigma do príncipe' dá continuidade à saga do jovem bruxo Harry Potter a partir do ponto em que o livro anterior parou o momento em que fica provado que o poder de Voldemort e dos Comensais da Morte, seus seguidores, cresce mais a cada dia, em meio à batalha entre o bem e o mal. A onda de terror provocada pelo Lorde das Trevas estaria afetando, até mesmo, o mundo dos trouxas (nãobruxos), e sendo agravada pela ação dos dementadores, criaturas mágicas aterrorizantes que 'sugam' a esperança e a felicidade das pessoas. Harry, que acabou de completar 16 anos, parte rumo ao sexto ano na Escola de Magia e Bruxaria de Hogwarts, animado e ao mesmo tempo apreensivo com a perspectiva de ter aulas particulares com o professor Dumbledore, o diretor da escola e o bruxo mais respeitado em toda comunidade mágica. Harry, longe de ser aquele menino magricela que vivia no quarto debaixo da escada na casa dos tios trouxas, é um dos principais nomes entre aqueles que lutam contra Voldemort, e se vê cada vez mais isolado à medida que os rumores de que ele é O Eleito o único capaz de derrotar o Lorde das Trevas, se espalham pelo mundo dos bruxos. Dois atentados contra a vida de estudantes, a certeza de Harry quanto ao envolvimento de Draco Malfoy com os Comensais da Morte e o comportamento de Snape, suspeito como sempre, adicionam ainda mais tensão ao já inquietante período. Apesar de tudo isso, Harry e os amigos são adolescentes típicos dividem tarefas escolares e dormitórios bagunçados, correm das aulas para os treinos de quadribol, e namoram.
        </Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginEnd: 15
  },
  categoryContainer: {
    marginRight: -300,
    marginLeft: 0,
    alignItems:  'flex-end',
    paddingHorizontal:20,
    alignItems:'center'
  },
  imageContainer: {
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignItems: 'center',
    paddingHorizontal: 250
  },
  textContainer: {
    alignItems: 'center',
  },
  textPrice: {
    fontSize: 26,
    color: 'black',
    marginBottom: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginEnd: 5
   
  },
  flatListContainer: {
    width: '100%',
    paddingTop: 20, // Espaçamento superior para a FlatList
  },
  textdes: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  textdeshp: {
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 14,
    marginStart:65,
    marginEnd: 65
  },
});

export default PaginaHp
