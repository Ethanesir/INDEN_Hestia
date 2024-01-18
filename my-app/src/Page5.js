import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PDFDocument, Text as PDFText, rgb } from 'react-native-pdf-lib';


const documents = [
  { id: '1', title: 'Document 1', filename: '../assets/document1.pdf' },
  { id: '2', title: 'Document 2', filename: '../assets/document2.pdf' },
  // Ajoutez d'autres documents au besoin
];
const Page5 = () => {
    const navigation = useNavigation();
  
    const handleDocumentPress = async (filename) => {
      try {
        const destPath = RNFetchBlob.fs.dirs.DocumentDir + `/${filename}`;
        await RNFetchBlob.config({ fileCache: true }).fetch(
          'GET',
          `bundle-assets://assets/${filename}`
        ).then((res) => {
          RNFetchBlob.fs.writeFile(destPath, res.data, 'base64');
        });
  
        // Naviguez vers PdfViewer avec le chemin local du fichier téléchargé
        navigation.navigate('PdfViewer', { localPath: destPath });
      } catch (error) {
        console.error('Erreur lors du téléchargement du fichier PDF : ', error);
      }
    };
    
    const handleBackPress = () => {
      // Revenir à la page précédente (dans ce cas, la page d'accueil)
      navigation.goBack();
    };

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={styles.item}
        onPress={() => handleDocumentPress(item.filename)}
      >
        <Text>{item.title}</Text>
      </TouchableOpacity>
    );
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Button title="Retour" onPress={() => navigation.goBack()} />
      </View>
        <FlatList
          data={documents}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
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
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
  },
    item: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
  });
  
  export default Page5;
  