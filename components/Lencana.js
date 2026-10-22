
import { View, Text, StyleSheet } from 'react-native';

export default function Lencana({ label }) {
  return (
    <View style={styles.lencana}>
      <Text style={styles.teks}>
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  lencana: {
    backgroundColor: '#E2F4EF',
    borderRadius: 7,
    paddingHorizontal: 9,
    paddingVertical: 5,
    alignSelf: 'flex-start',
  },
  teks: {
    color: '#176B5B',
    fontSize: 11,
    fontWeight: 'bold',
  },
});