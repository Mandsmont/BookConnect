import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, TextInput, StyleSheet, ScrollView } from 'react-native';

const CommunityScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Olá, mundo!',
      content: 'Este é meu primeiro post!',
      author: 'Luana Silva',
      profilePicture: '../../../assets/Luana.jpg',
      comments: [
        {
          id: 1,
          author: 'Pedro Oliveira',
          content: 'Adorei o aplicativo da livraria! É muito fácil encontrar livros',
        },
        {
          id: 2,
          author: 'Ana Paula',
          content: 'Sim, eu também amo ler! É uma das minhas atividades favoritas',
        },
      ],
    },
    {
      id: 2,
      title: 'Oi pessoal, tudo bom?',
      content: 'Amei ter encontrado esse aplicativo, amo ler <3',
      author: 'Pedro Oliveira',
      profilePicture: '../../../assets/Pedro.svg',
      comments: [
        {
          id: 1,
          author: 'Luana Silva',
          content: 'Eu também amo ler! Qual é o seu livro favorito?',
        },
        {
          id: 2,
          author: 'João Victor',
          content: 'O aplicativo da livraria é incrível! Eu encontrei muitos livros interessantes',
        },
      ],
    },
    {
      id: 3,
      title: 'App incrível!!',
      content: 'Adoro que posso filtrar por gênero',
      author: 'Ana Paula',
      profilePicture: '../../../assets/ana.jpg',
      comments: [
        {
          id: 1,
          author: 'Maria Eduarda',
          content: 'Eu amo ler romances! Qual é o seu gênero favorito?',
        },
        {
          id: 2,
          author: 'Luana Silva',
          content: 'O aplicativo da livraria é muito útil! Eu uso todos os dias',
        },
      ],
    },
    {
      id: 4,
      title: 'Cara esse app me ajudou muito',
      content: 'Adoro ler nas horas vagas',
      author: 'João Victor',
      profilePicture: '../../../assets/Joao.jpg',
      comments: [
        {
          id: 1,
          author: 'Pedro Oliveira',
          content: 'Eu também amo ler! Qual é o seu autor favorito?',
        },
        {
          id: 2,
          author: 'Ana Paula',
          content: 'O aplicativo da livraria é incrível! Eu encontrei muitos livros interessantes',
        },
      ],
    },
    {
      id: 5,
      title: 'Hello, alguém por aí?',
      content: 'Em amo ler romances, mais alguém?',
      author: 'Maria Eduarda',
      profilePicture: '../../../assets/Maria.jpg',
      comments: [
        {
          id: 1,
          author: 'Luana Silva',
          content: 'Eu amo ler histórias de amor! Qual é o seu livro favorito?',
        },
        {
          id: 2,
          author: 'Pedro Oliveira',
          content: 'Posso ser o seu Romeu?',
        },
      ],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.postContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={{ uri: item.profilePicture }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.author}</Text>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        </View>
        {item.comments.map((comment) => (
          <View key={comment.id} style={{ marginLeft: 60, marginTop: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>{comment.author}</Text>
            <Text>{comment.content}</Text>
          </View>
        ))}
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={{ padding: 10, backgroundColor: 'white', elevation: 4, position: 'sticky', top: 0 }}>
        <TextInput
          placeholder="Pesquisar"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        />
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        stickyHeaderIndices={[0]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  separator: {
    height: 10,
  },
});

export default CommunityScreen;
