import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Soul & Maka ♥
      </Text>
      <Image style={styles.logo} source={{uri:"https://i.pinimg.com/736x/5f/43/10/5f4310c2ab6d8fbe7d885af43202bfd9.jpg"}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height:328,
    width: 128,
  }
});
