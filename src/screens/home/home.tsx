import axios from "axios";
import { useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './homeStyles';

const HomeScreen = () => {
  const [piada, setPiada] = useState(null);

  const getJoke = async () => {
      return await axios.get(
        "https://v2.jokeapi.dev/joke/Any?lang=pt"
      ).then((response) => {setPiada(response.data)});
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={getJoke} >
        <Text style={styles.ButtonText}>
          Ver Piada
        </Text>
      </TouchableOpacity>

      {piada &&(
        <View style={styles.containerText}>
          <Text style={styles.text}>{piada.setup}</Text>
          <Text style={styles.text}>{piada.delivery}</Text>
        </View>
      )}
    </View>
  );
}

export default HomeScreen;  