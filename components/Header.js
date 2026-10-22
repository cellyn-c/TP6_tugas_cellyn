
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ jumlahBuku }) {
  return (
    <View style={styles.header}>
      <Text style={styles.label}>CAMPUS LIBRARY</Text>

      <Text style={styles.judul}>Campus Reads.</Text>

      <Text style={styles.deskripsi}>
        Temukan bacaan untuk memperluas wawasanmu.
      </Text>

      <Text style={styles.jumlah}>
        Koleksi pilihan · {jumlahBuku} buku
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#142D4E',
    padding: 24,
    paddingTop: 35,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  label: {
    color: '#9EDFD2',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  judul: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  deskripsi: {
    color: '#D5E0EC',
    fontSize: 14,
    marginTop: 8,
  },
  jumlah: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 18,
  },
});