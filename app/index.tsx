import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState(
    'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example'
  );

  const generateQRCode = () => {
    const newQrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;
    setQrCodeUrl(newQrCodeUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador QRCODE</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text or URL"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button title="Gerar QR Code" onPress={generateQRCode} />
      <View style={styles.qrContainer}>
        <Image style={styles.qrImage} source={{ uri: qrCodeUrl }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    width: '80%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  qrContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  qrImage: {
    width: 150,
    height: 150,
  },
});
