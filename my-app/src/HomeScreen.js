// HomeScreen.js
import React from 'react';
//import { StatusBar } from 'expo-status-bar'; <StatusBar style="auto" />
import { View, TouchableOpacity,Image, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const handleButtonPress = (pageName) => {
        // Naviguer vers la nouvelle page
        navigation.navigate(pageName);
      };
    

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Bouton 1 */}
        <TouchableOpacity style={styles.button1} onPress={() => handleButtonPress('Page1')}>
          <Image source={require('../assets/nuage.png')} style={styles.buttonImage1} resizeMode="contain"/>
          <Text style={styles.buttonText}>Météo</Text>
        </TouchableOpacity>
        {/* Bouton 2 */}
        <TouchableOpacity style={styles.button2} onPress={() => handleButtonPress('Page2')}>
        <Image source={require('../assets/calendrier.png')} style={styles.buttonImage2} resizeMode="contain"/>
          <Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>

        {/* Bouton 3 */}
        <TouchableOpacity style={styles.button3} onPress={() => handleButtonPress('Page3')}>
          <Image source={require('../assets/message.png')} style={styles.buttonImage3} resizeMode="contain"/>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Bouton 4 */}
        <TouchableOpacity style={styles.button4} onPress={() => handleButtonPress('Page4')}>
          <Image source={require('../assets/admin.png')} style={styles.buttonImage4} resizeMode="contain"/>
          <Text style={styles.buttonText}>Administration</Text>
        </TouchableOpacity>

        {/* Bouton 5 */}
        <TouchableOpacity style={styles.button5} onPress={() => handleButtonPress('Page5')}>
          <Image source={require('../assets/journal.png')} style={styles.buttonImage5} resizeMode="contain"/>
          <Text style={styles.buttonText}>Actualité</Text>
        </TouchableOpacity>

        {/* Bouton 6 */}
        <TouchableOpacity style={styles.button6} onPress={() => handleButtonPress('Page6')}>
          <Image source={require('../assets/des.png')} style={styles.buttonImage6} resizeMode="contain"/>
          <Text style={styles.buttonText}>Jeux</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly', // Utilise 'space-evenly' pour répartir l'espace de manière uniforme entre les boutons
    marginBottom: 20, // Ajoute un espacement vertical entre les lignes de boutons
  },
 
  button1: {
    backgroundColor: '#407BFA',
    width: 100,
    height: 110,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 40, // Ajuste l'écart horizontal entre les boutons
  },
  button2: {
    backgroundColor: '#8FABFF',
    width: 100,
    height: 110,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 40, // Ajuste l'écart horizontal entre les boutons
  },
  button3: {
    backgroundColor: '#77B070',
    width: 100,
    height: 110,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 40, // Ajuste l'écart horizontal entre les boutons
  },
  button4: {
    backgroundColor: '#AFAFAF',
    width: 100,
    height: 110,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 40, // Ajuste l'écart horizontal entre les boutons
  },
  button5: {
    backgroundColor: '#A0A0FF',
    width: 100,
    height: 110,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 40, // Ajuste l'écart horizontal entre les boutons
  },
  button6: {
    backgroundColor: '#FF7B7F',
    width: 100,
    height: 110,
    borderRadius: 5,
    alignItems: 'center',
    overflow: 'hidden',
    marginHorizontal: 40, // Ajuste l'écart horizontal entre les boutons
  },
  buttonImage1: {
    width: '80%',
    height:'50%',
    marginTop: 5,
  },
  buttonImage2: {
    width: '100%',
    height:'55%',
    marginTop: 10,
  },
  buttonImage3: {
    width: '100%',
    height:'55%',
    marginTop: 10,
  },
  buttonImage4: {
    width: '100%',
    height:'55%',
    marginTop: 10,
  },
  buttonImage5: {
    width: '100%',
    height:'55%',
    marginTop: 10,
  },
  buttonImage6: {
    width: '100%',
    height:'55%',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFF',
    marginTop: 10,
  },
});

export default HomeScreen;
