import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync,getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import firebase from '../config/firebase';

import api from '../services/api';


function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [gamers, setGamers] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({ 
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadInitialPosition();
  }, []);

  async function loadGamers() {
    const { latitude, longitude } = currentRegion;

    let lat = latitude;
    let long = longitude;


    const response = await api.get('/search', {
      params: {
        lat,
        long,
        category
      }  
    });

    setGamers(response.data.gamers);
    // setupWebsocket();
  };

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion){
    return null;
  }  

  return (
    <>
      <MapView 
        onRegionChangeComplete={handleRegionChanged} 
        initialRegion={currentRegion} 
        style={styles.map}
      >
        {gamers.map(gamer => (
          <Marker 
            key={gamer._id}
            coordinate={{ 
              latitude: gamer.location.coordinates[1], 
              longitude: gamer.location.coordinates[0]
            }}
          >
          <Image 
            style={styles.avatar} 
            source={{ uri: gamer.logo_url }}
          />  

          <Callout onPress={() => {
            navigation.navigate('Profile', {web_username: gamer.web });
          }}>
            <View style={styles.callout}>
              <Text style={styles.gamerName}>{gamer.name}</Text>
              <Text style={styles.gamerAddress}>{gamer.address}</Text>
              <Text style={styles.gamerCategory}>{gamer.category}</Text>
            </View>
          </Callout>
        </Marker>
        ))}
      </MapView>
      <View style={styles.searchForm}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Buscar estabelecimentos..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect= {false}
            value={category}
            onChangeText={setCategory}
          />

          <TouchableOpacity onPress={loadGamers} style={styles.loadButton}>
            <MaterialIcons name="games" size={20} color="#FFF" /> 
          </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#723888',
    backgroundColor: '#FFF'
  },

  callout: {
    width: 260,
  },

  gamerName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  gamerAddress: {
    color: '#666',
    fontSize: 12,
    marginTop: 5,
  },

  gamerCategory: {
    marginTop: 5,
    color: '#723888',
    fontWeight: 'bold',
  },

  searchForm: {
    position: 'absolute',
    top: 20,
    right: 20,
    left: 20,
    zIndex: 5,
    flexDirection: 'row',
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor:'#723888',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },


})

export default Main;