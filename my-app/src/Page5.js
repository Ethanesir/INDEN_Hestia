import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
//import { Document, Page, pdfjs } from 'react-native-pdf';

//pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Page5 = ({ navigation }) => {
  /*const articles = [
    { id: 1, title: 'Article 1', pdf: require('assets/article2.pdf') },
    { id: 2, title: 'Article 2', pdf: require('assets/article2.pdf') },
    { id: 3, title: 'Article 3', pdf: require('assets/article3.pdf') },
    // Ajoutez d'autres articles au besoin
  ];

  const openPDF = (pdf) => {
    navigation.navigate('PDFViewer', { pdf });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Journal</Text>
      {articles.map((article) => (
        <TouchableOpacity
          key={article.id}
          style={styles.button}
          onPress={() => openPDF(article.pdf)}
        >
          <Text style={styles.buttonText}>{article.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );*/
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Page5;
