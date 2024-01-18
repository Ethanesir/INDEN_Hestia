import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PDFView } from 'react-native-pdf-lib';

const PdfViewer = ({ route }) => {
  const { localPath } = route.params;

  return (
    <View style={styles.container}>
      <PDFView
        fadeInDuration={250.0}
        style={{ flex: 1 }}
        resource={localPath}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`current page: ${page}`);
        }}
        onError={(error) => {
          console.log(error);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PdfViewer;
