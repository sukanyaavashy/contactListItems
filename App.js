import React from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    id: '1',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '2',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '3',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '4',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '5',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '6',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '7',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '8',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '9',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru',
  },
  {
    id: '10',
    imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/512px-Google_Contacts_icon.svg.png?20201204121212',
    title: 'Sukanya vanganuru'}
];

const Item = ({ title }) => (

  <View >
    <Text style={styles.title}>{title}</Text>
  </View>
 
);

const App = () => {
  const renderItem = ({ item }) => (
    <>
      <View style={styles.content}>
        <Image source={{uri:item.imageUrl}} style={{height:60, width:60, borderRadius:60/2, marginRight:50}} />

        <Item title={item.title} imageUrl={item.imageUrl}/>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  
  title: {
    fontSize: 18,
  },
  content:{
    flexDirection:'row',
    
    margin:30
  }
});

export default App;