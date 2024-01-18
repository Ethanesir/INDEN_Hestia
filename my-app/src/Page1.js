import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
const Page1 = ({ navigation })  => {
  const [city, setCity] = useState('Paris'); // Ville par défaut
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7542815edd17ec6edf5326653dc47b35`
      );

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des données météo : ', error);
    }
  };
  const kelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
  return celsius.toFixed(1); 
  };

  useEffect(() => {
    fetchWeatherData();
  }, [city]); // Refetch les données lorsque la ville change
  console.log('Weather Data:', weatherData);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Retour" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.content}>
      <Text style={styles.title}>Météo</Text>
      <TextInput
        style={styles.input}
        placeholder="Entrez le nom de la ville"
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      {weatherData ? (
        <View>
          <Text>Température: {kelvinToCelsius(weatherData.main && weatherData.main.temp)}°C</Text>
          <Text>Description: {weatherData.weather && weatherData.weather[0].description}</Text>
          {/* Ajoutez d'autres détails météo ici */}
        </View>
      ) : (
        <Text>Chargement des données météo...</Text>
      )}
      <Button title="Actualiser la météo" onPress={fetchWeatherData} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 30,
    left: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Page1;
